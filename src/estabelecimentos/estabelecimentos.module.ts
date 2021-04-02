import { Module } from '@nestjs/common';
import { EstabelecimentoService } from './shared/estabelecimento.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EstabelecimentosController } from './estabelecimentos.controller';
import { EstabelecimentoSchema } from './schemas/estabelecimento.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'estabelecimentos' , schema: EstabelecimentoSchema}])
  ],
  controllers: [
    EstabelecimentosController
  ],
  providers: [EstabelecimentoService],
})
export class EstabelecimentosModule {}
