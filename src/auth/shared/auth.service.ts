import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { CryptService } from '../../shared/services/crypt/crypt.service';
import { IUserData } from './iuser-data';
import { IJwtPayload } from './i-jwt-payload';

@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private cryptService: CryptService
  ) {
  }

  async validateUser(userEmail: string, usuarioPassword: string) : Promise<IUserData>{
    const usuario = await this.usuarioService.getByEmail(userEmail);

    if (usuario && this.cryptService.compare(usuarioPassword, usuario.password)){
      const { id, nome, email, type } = usuario;
      return { id: id, nome, email, type};
      // return { id: usuario._id, usuario.nome, usuario.email, usuario.type};
      // return usuario;
    }

    return null;
  }

  async login(usuario: IUserData){

    const payload : IJwtPayload = {sub : usuario.id, nome: usuario.nome, email: usuario.email, type: usuario.type };
    return {
      access_token: this.jwtService.sign(payload),
    };

  }

}
