import { Module } from '@nestjs/common';
import { CategoriasController } from './categorias.controller';
import { CategoriaService } from './shared/categoria.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaSchema } from './schemas/categoria.schema';


@Module({
  imports: [
    MongooseModule.forFeature([{name : 'Categoria', schema: CategoriaSchema}])
  ],
  controllers: [CategoriasController],
  providers: [CategoriaService],
})
export class CategoriasModule {}
