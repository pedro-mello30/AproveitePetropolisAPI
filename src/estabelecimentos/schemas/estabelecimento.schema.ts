import * as mongoose from 'mongoose';


export const EstabelecimentoSchema = new mongoose.Schema({
  nome: String,
  telefone: String,
  endereço: String,
});
