import { Module } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { UsuariosModule } from '../usuarios/usuarios.module';
import { LocalStrategy } from './shared/local.strategy';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './shared/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './shared/constants';
import { SharedModule } from '../shared/shared.module';
import { LocalAdminAuthGuard } from './shared/admin/local-admin-auth.guard';
import { LocalAdminStrategy } from './shared/admin/local-admin.strategy';
import { JwtAdminStrategy } from './shared/admin/jwt-admin.strategy';

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
  controllers: [AuthController],
  providers: [
    AuthService,
    // LocalStrategy,
    // JwtStrategy,
    LocalAdminStrategy,
    JwtAdminStrategy
  ]
})
export class AuthModule {}
