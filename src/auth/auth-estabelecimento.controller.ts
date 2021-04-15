import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { LocalEstabelecimentoAuthGuard } from './shared/estabelecimento/local-estabelecimento-auth.guard';
import { Usuario } from '../usuarios/shared/usuario';
import { UsuarioService } from '../usuarios/shared/usuario.service';

@Controller('auth-estabelecimento')
export class AuthEstabelecimentoController {
  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {}

  @UseGuards(LocalEstabelecimentoAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('/signup')
  async create(@Body() usuario: Usuario){
    return this.usuarioService.createEstabelecimento(usuario);
  }
}
