import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../constants';
import { IJwtPayload } from '../i-jwt-payload';
import { UserTypeEnum } from '../../../usuarios/shared/user.type.enum';


@Injectable()
export class JwtEstabelecimentoStrategy extends PassportStrategy(Strategy, 'jwt-estabelecimento'){

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreException: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  validate(payload: IJwtPayload){
    if(payload.type != UserTypeEnum.estabelecimento){
      throw new UnauthorizedException();
    }
    return payload;
  }

}
