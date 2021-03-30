import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriaService } from './shared/categoria.service';

@Module({
  controllers: [CategoriasController],
  providers: [CategoriaService],
})
export class CategoriasModule {}
