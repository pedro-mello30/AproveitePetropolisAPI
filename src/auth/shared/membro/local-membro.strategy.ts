import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';
import { UserTypeEnum } from '../../../usuarios/shared/user.type.enum';


@Injectable()
export class LocalMembroStrategy extends PassportStrategy(Strategy,'local-membro'){


  constructor(
    private authService: AuthService
  ) {
    super({
      usernameField: 'email',
      passwordField: 'password'
    });
  }

  async validate(email: string, password: string){
    const usuario = await this.authService.validateUser(email, password);

    if(!usuario || usuario.type != UserTypeEnum.membro){
      throw new UnauthorizedException();
    }

    return usuario;
  }

}
