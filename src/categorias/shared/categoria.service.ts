import { Injectable } from '@nestjs/common';
import { Categoria } from './categoria';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CategoriaService {

  constructor(@InjectModel('Categoria') private readonly categoriaModel: Model<Categoria>) { }

  async getAll(){
    return await this.categoriaModel.find().exec();
  }

  async getById(id: string){
    return await this.categoriaModel.findById(id).exec();
  }

  async create(categoria: Categoria){
    const createdCategoria = new this.categoriaModel(categoria);
    return await createdCategoria.save();
  }

  async update(id: string, categoria: Categoria){
    await this.categoriaModel.updateOne({_id: id}, categoria).exec();
    return this.getById(id);
  }

  async delete(id: string){
    return await this.categoriaModel.deleteOne({_id: id}).exec();
  }



}
