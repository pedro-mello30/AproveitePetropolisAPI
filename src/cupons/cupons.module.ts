import { Module } from '@nestjs/common';
import { CupomService } from './shared/cupom.service';
import { CuponsController } from './cupons.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CupomSchema } from './schemas/cupom.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: 'cupom', schema: CupomSchema}])
  ],
  controllers: [CuponsController],
  providers: [CupomService]
})
export class CuponsModule {}
