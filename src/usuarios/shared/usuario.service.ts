import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario';
import { Model } from 'mongoose';

@Injectable()
export class UsuarioService {

  constructor(@InjectModel('usuarios') private readonly usuariosModel : Model<Usuario>) {
  }

  async getAll(){
    return await this.usuariosModel.find().exec();
  }

  async getById(id: string){
    return await this.usuariosModel.findById(id).exec();
  }

  async create(usuario: Usuario){
    const createdUsuario = new this.usuariosModel(usuario);
    return await createdUsuario.save();
  }

  async update(id: string, usuario: Usuario){
    await this.usuariosModel.updateOne({_id: id}, usuario).exec();
    return this.getById(id);
  }

  async delete(id: string){
    return await this.usuariosModel.deleteOne({_id: id}).exec();
  }

}
