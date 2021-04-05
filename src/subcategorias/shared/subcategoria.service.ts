import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Subcategoria } from './subcategoria';


@Injectable()
export class SubcategoriaService {
  constructor(
    @InjectModel('subcategorias')
    private readonly subcategoriaModel: Model<Subcategoria>,
  ) {}

  async getAll() {
    return await this.subcategoriaModel.find().exec();
  }

  async getById(id: string) {
    return await this.subcategoriaModel.findById(id).exec();
  }

  async create(subcategoria: Subcategoria) {
    const createdSubcategoria = new this.subcategoriaModel(
      subcategoria
    );
    return await createdSubcategoria.save();
  }

  async update(id: string, subcategoria: Subcategoria) {
    await this.subcategoriaModel
      .updateOne({ _id: id }, subcategoria)
      .exec();

    return this.getById(id);
  }

  async delete(id: string) {
    return await this.subcategoriaModel.deleteOne({ _id : id }).exec();
  }
}
