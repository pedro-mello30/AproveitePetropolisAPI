import { Document } from 'mongoose';

export class Usuario extends Document{
  _id: string;
  nome: string;
  email: string;
  telefone: string;
}
