import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { LocalAdminAuthGuard } from './shared/admin/local-admin-auth.guard';
import { Usuario } from '../usuarios/shared/usuario';
import { UsuarioService } from '../usuarios/shared/usuario.service';

@Controller('auth-admin')
export class AuthAdminController {
    constructor(
    private authService: AuthService,
    private usuarioService: UsuarioService
  ) {}

  @UseGuards(LocalAdminAuthGuard)
  @Post('/login')
  async login(@Request() req: any) {
    return this.authService.login(req.user);
  }

  @Post('/signup')
  async create(@Body() usuario: Usuario){
    return this.usuarioService.createAdmin(usuario);
  }
}
