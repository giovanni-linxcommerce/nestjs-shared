import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { oauthStrategyName } from './jwt-oauth.strategy';

@Injectable()
export class JwtOAuthAuthGuard extends AuthGuard(oauthStrategyName) {}
