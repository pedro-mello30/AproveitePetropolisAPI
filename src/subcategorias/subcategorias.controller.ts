import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { SubcategoriaService } from './shared/subcategoria.service';
import { Subcategoria } from './shared/subcategoria';

// @ts-ignore
@Controller('subcategorias')
export class SubcategoriasController {

  constructor(
    private subcategoriaService: SubcategoriaService
  ) {}

  @Get()
  async getAll(): Promise<Subcategoria[]> {
    return this.subcategoriaService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Subcategoria>{
    return this.subcategoriaService.getById(id);
  }

  @Post()
  async create(@Body() subcategoria: Subcategoria){
    return this.subcategoriaService.create(subcategoria);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() subcategoria: Subcategoria){
    return this.subcategoriaService.update(id, subcategoria);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.subcategoriaService.delete(id);
  }

}
