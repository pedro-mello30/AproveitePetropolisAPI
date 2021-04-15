import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { LocalMembroAuthGuard } from './shared/membro/local-membro-auth.guard';
import { Usuario } from '../usuarios/shared/usuario';
import { UsuarioService } from '../usuarios/shared/usuario.service';

@Controller('auth-membro')
export class AuthMembroController {
  constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {}

  @UseGuards(LocalMembroAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('/signup')
  async create(@Body() usuario: Usuario){
    return this.usuarioService.createMembro(usuario);
  }

}
