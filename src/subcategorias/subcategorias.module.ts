import { Module } from '@nestjs/common';
import { SubcategoriasController } from './subcategorias.controller';
import { SubcategoriaService } from './shared/subcategoria.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SubcategoriaSchema } from './schemas/subcategoria.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'subcategorias', schema: SubcategoriaSchema}])
  ],
  controllers: [
    SubcategoriasController,
  ],
  providers: [
    SubcategoriaService
  ],
  exports: [
    SubcategoriasModule
  ]
})
export class SubcategoriasModule {}
