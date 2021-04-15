import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class LocalEstabelecimentoAuthGuard extends AuthGuard('local-estabelecimento'){}
