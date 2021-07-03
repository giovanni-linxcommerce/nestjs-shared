import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { idADstrategyName } from './jwt-id-ad.strategy';

@Injectable()
export class JwtIdADAuthGuard extends AuthGuard(idADstrategyName) {}
