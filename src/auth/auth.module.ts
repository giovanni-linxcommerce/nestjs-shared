import { Module, HttpModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { getPublicKey, jwtSettings } from './constants';

@Module({
  imports: [
    HttpModule,
    PassportModule,
    JwtModule.registerAsync({
      useFactory: async () => {
        const pem = await getPublicKey();
        const algorithm = 'RS256';
        return {
          publicKey: pem,
          signOptions: { expiresIn: jwtSettings.expirationTime, algorithm: algorithm },
          verifyOptions: { algorithms: [algorithm], },
        };
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService],
})
export class AuthModule {}
