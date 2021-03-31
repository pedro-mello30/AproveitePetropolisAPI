import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from './shared/usuario.service';
import { Usuario } from './shared/usuario';

@Controller('usuarios')
export class UsuariosController {

  constructor(
    private usuarioService: UsuarioService
  ) {}

  @Get()
  async getAll() : Promise<Usuario[]> {
    return this.usuarioService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Usuario> {
    return this.usuarioService.getById(id);
  }

  @Post()
  async create(@Body() categoria: Usuario){
    return this.usuarioService.create(categoria);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() categoria: Usuario){
    return this.usuarioService.update(id, categoria);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.usuarioService.delete(id);
  }

}
