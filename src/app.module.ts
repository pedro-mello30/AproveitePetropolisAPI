import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriasModule } from './categorias/categorias.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UsuariosModule } from './usuarios/usuarios.module';



@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:6kzhWQUx3LVLYCC4@cluster0.dffo5.mongodb.net/test?retryWrites=true&w=majority'),
    CategoriasModule,
    UsuariosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
