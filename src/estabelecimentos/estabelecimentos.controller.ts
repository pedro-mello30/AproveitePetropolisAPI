import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EstabelecimentoService } from './shared/estabelecimento.service';
import { Estabelecimento } from './shared/estabelecimento';

@Controller('estabelecimentos')
export class EstabelecimentosController {

  constructor(private estabelecimentoService : EstabelecimentoService) {
  }

  @Get()
  async getAll() : Promise<Estabelecimento[]> {
    return this.estabelecimentoService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: string): Promise<Estabelecimento> {
    return this.estabelecimentoService.getById(id);
  }

  @Post()
  async create(@Body() categoria: Estabelecimento){
    return this.estabelecimentoService.create(categoria);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() estabelecimento: Estabelecimento){
    return this.estabelecimentoService.update(id, estabelecimento);
  }

  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.estabelecimentoService.delete(id);
  }
}
