import { Module } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './shared/constants';
import { SharedModule } from '../shared/shared.module';
import { LocalAdminStrategy } from './shared/admin/local-admin.strategy';
import { JwtAdminStrategy } from './shared/admin/jwt-admin.strategy';
import { LocalEstabelecimentoStrategy } from './shared/estabelecimento/local-estabelecimento.strategy';
import { JwtEstabelecimentoStrategy } from './shared/estabelecimento/jwt-estabelecimento.strategy';
import { LocalMembroStrategy } from './shared/membro/local-membro.strategy';
import { JwtMembroStrategy } from './shared/membro/jwt-membro.strategy';
import { AuthAdminController } from './auth-admin.controller';
import { AuthEstabelecimentoController } from './auth-estabelecimento.controller';
import { AuthMembroController } from './auth-membro.controller';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '6d'},
    }),
    UsuariosModule,
    SharedModule
  ],
  controllers: [
    AuthAdminController,
    AuthEstabelecimentoController,
    AuthMembroController
  ],
  providers: [
    AuthService,
    LocalAdminStrategy,
    JwtAdminStrategy,
    LocalEstabelecimentoStrategy,
    JwtEstabelecimentoStrategy,
    LocalMembroStrategy,
    JwtMembroStrategy
  ]
})
export class AuthModule {}
