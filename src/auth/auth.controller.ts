import { Controller, Get, Param, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { LocalAdminAuthGuard } from './shared/admin/local-admin-auth.guard';
import { UsuarioService } from '../usuarios/shared/usuario.service';
import { Usuario } from '../usuarios/shared/usuario';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService,
    private userService: UsuarioService
  ) {
  }

  @UseGuards(LocalAdminAuthGuard)
  @Post('/login')
  async login(@Request() req: any){
    return this.authService.login(req.user);
    // return req;
  }



  @Get(':email')
  async getById(@Param('email') email: string): Promise<Usuario> {
    return this.userService.getByEmail(email);
  }
}
