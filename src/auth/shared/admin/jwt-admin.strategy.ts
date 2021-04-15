import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { IJwtPayload } from '../i-jwt-payload';
import { UserTypeEnum } from '../../../usuarios/shared/user.type.enum';
import { jwtConstants } from '../constants';


@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreException: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: IJwtPayload) {
    if(payload.type != UserTypeEnum.admin){
      throw new UnauthorizedException();
    }
    return payload;
  }

}
