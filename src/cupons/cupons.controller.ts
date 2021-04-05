import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CupomService } from './shared/cupom.service';
import { Cupom } from './shared/cupom';

@Controller('cupons')
export class CuponsController {

  constructor(
    private cupomService: CupomService
  ) {}

  @Get()
  getAll(): Promise<Cupom[]> {
    return this.cupomService.getAll();
  }

  @Get(':id')
  getById(@Param('id') id: string): Promise<Cupom>{
    return this.cupomService.getById(id);
  }

  @Post()
  create(@Body('cupom') cupom: Cupom){
    return this.cupomService.create(cupom);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('cupom') cupom: Cupom){
    return this.cupomService.update(id, cupom);
  }

  @Delete(':id')
  delete(@Param('id') id: string){
    return this.cupomService.delete(id);
  }
}
