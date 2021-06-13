import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { getPublicKey } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      algorithms: ['RS256'],
      secretOrKeyProvider: async (_, __, done) => {
        const publicPem = await getPublicKey();
        return done(null, publicPem);
      },
    });
  }

  async validate(payload: any) {
    return { ...payload };
  }
}
