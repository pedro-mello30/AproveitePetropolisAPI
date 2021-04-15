import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Injectable()
export class LocalMembroAuthGuard extends AuthGuard ('local-membro'){}
