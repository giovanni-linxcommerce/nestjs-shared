import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { passportJwtSecret } from 'jwks-rsa';
import { oauthSettings } from './constants';

export const oauthStrategyName = 'oauth-jwt';

@Injectable()
export class JwtOAuthStrategy extends PassportStrategy(Strategy, oauthStrategyName) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      audience: oauthSettings.audience,
      issuer: oauthSettings.issuer,
      secretOrKeyProvider: passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: parseInt(oauthSettings.jwksRequestsPerMinute, 10) || 5,
        jwksUri: oauthSettings.jwksUri,
      }),
    });
  }

  async validate(payload: any) {
    return { ...payload };
  }
}
