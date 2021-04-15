import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class JwtMembroAuthGuard extends AuthGuard('jwt-membro'){}
