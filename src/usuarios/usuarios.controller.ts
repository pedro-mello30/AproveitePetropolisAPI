import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsuarioService } from './shared/usuario.service';
import { Usuario } from './shared/usuario';
import { JwtAdminAuthGuard } from '../auth/shared/admin/jwt-admin-auth.guard';

@Controller('usuarios')
export class UsuariosController {

  constructor(
    private usuarioService: UsuarioService,
  ) {}


  @UseGuards(JwtAdminAuthGuard)
  @Get()
  async getAll() : Promise<any> {
    return this.usuarioService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Usuario> {
    return this.usuarioService.getById(id);
  }

  // @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() usuario: Usuario){
    return this.usuarioService.createAdmin(usuario);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() usuario: Usuario){
    return this.usuarioService.update(id, usuario);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.usuarioService.delete(id);
  }

}
