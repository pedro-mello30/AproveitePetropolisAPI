import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriasModule } from './categorias/categorias.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { EstabelecimentosModule } from './estabelecimentos/estabelecimentos.module';
import { SubcategoriasModule } from './subcategorias/subcategorias.module';
import { CuponsModule } from './cupons/cupons.module';
import { AuthModule } from './auth/auth.module';

import { FirebaseAdminModule } from '@aginix/nestjs-firebase-admin'
import { MembrosModule } from './membros/membros.module';
import * as admin from 'firebase-admin'

var serviceAccount = require("/mnt/D/Projetos/ProjetosApps/AproveitePetropolis/aproveite-petropolis-api/src/environments/FirebaAdmin.json");


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://db_user:6kzhWQUx3LVLYCC4@cluster0.dffo5.mongodb.net/test?retryWrites=true&w=majority'),
    FirebaseAdminModule.forRootAsync({
      useFactory: () => ({
        credential: admin.credential.cert(serviceAccount)
      })
    }),
    CategoriasModule,
    UsuariosModule,
    EstabelecimentosModule,
    SubcategoriasModule,
    CuponsModule,
    AuthModule,
    MembrosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
