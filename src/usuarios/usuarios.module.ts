import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './schemas/usuario.schema';
import { UsuariosController } from './usuarios.controller';
import { UsuarioService } from './shared/usuario.service';
import { SharedModule } from '../shared/shared.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name : 'usuarios', schema: UsuarioSchema}]),
    SharedModule
  ],
  controllers: [UsuariosController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuariosModule {}
