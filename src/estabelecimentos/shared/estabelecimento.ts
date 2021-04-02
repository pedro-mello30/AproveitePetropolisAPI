import { Document } from 'mongoose';

export class Estabelecimento extends Document{
  nome: string;
  telefone: string;
  endereço: string;
}
