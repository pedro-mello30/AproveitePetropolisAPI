import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsuarioService } from './shared/usuario.service';
import { Usuario } from './shared/usuario';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';

@Controller('usuarios')
export class UsuariosController {

  constructor(
    private usuarioService: UsuarioService
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() : Promise<Usuario[]> {
    return this.usuarioService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string): Promise<Usuario> {
    return this.usuarioService.getById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() categoria: Usuario){
    return this.usuarioService.create(categoria);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() categoria: Usuario){
    return this.usuarioService.update(id, categoria);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.usuarioService.delete(id);
  }

}
