import * as mongoose from 'mongoose';

export const UsuarioSchema = new mongoose.Schema({
  nome: String,
  email: String,
  password: String,
  telefone: String,
});
