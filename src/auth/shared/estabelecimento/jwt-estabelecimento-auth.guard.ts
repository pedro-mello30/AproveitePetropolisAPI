import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class JwtEstabelecimentoAuthGuard extends AuthGuard ('jwt-estabelecimento'){}
