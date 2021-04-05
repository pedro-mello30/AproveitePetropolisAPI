import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuarioSchema } from './schemas/usuario.schema';
import { UsuariosController } from './usuarios.controller';
import { UsuarioService } from './shared/usuario.service';

@Module({
  imports: [
    MongooseModule.forFeature([{name : 'usuarios', schema: UsuarioSchema}])
  ],
  controllers: [UsuariosController],
  providers: [UsuarioService],
  exports: [UsuarioService]
})
export class UsuariosModule {}
