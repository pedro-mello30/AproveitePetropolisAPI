import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CategoriaService } from './shared/categoria.service';
import { Categoria } from './shared/categoria';

@Controller('categorias')
export class CategoriasController {

  constructor(
    private categoriaService : CategoriaService
  ) {}

  @Get()
  async getAll() : Promise<Categoria[]> {
    return this.categoriaService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Categoria> {
    return this.categoriaService.getById(id);
  }

  @Post()
  async create(@Body() categoria: Categoria){
    return this.categoriaService.create(categoria);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() categoria: Categoria){
    return this.categoriaService.update(id, categoria);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.categoriaService.delete(id);
  }


}
