import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { JwtService } from '@nestjs/jwt';
import { CryptService } from '../../shared/services/crypt/crypt.service';
import { IUserData } from './iuser-data';
import { IJwtPayload } from './i-jwt-payload';

@Injectable()
export class AuthService {


  userModel;


  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private cryptService: CryptService
  ) {
    this.userModel = {
      id: 'n320ty3ycrew',
      nome: 'admin-user-api',
      email: 'admin-user-api',
      password: 'admin-user-api',
      type: 0
    };
  }

  async validateUser(userEmail: string, usuarioPassword: string) : Promise<IUserData>{


    // if (this.cryptService.compare(usuarioPassword, this.userModel.password) && userEmail == this.userModel.email){
    if (usuarioPassword == this.userModel.password && userEmail == this.userModel.email){
      const { id, nome, email, type } = this.userModel;
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
