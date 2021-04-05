import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../../usuarios/shared/usuario.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
  ) {
  }

  async validateUser(userEmail: string, usuarioPassword: string){
    const usuario = await this.usuarioService.getByEmail(userEmail);

    if (usuario && usuario.password === usuarioPassword){
      const { _id, nome, email, telefone } = usuario;
      return { id: _id, nome, email, telefone };
    }

    return null;
  }

  async login(usuario: any){
    const payload = {usernameField : 'email', passwordField: 'password'}
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

}
