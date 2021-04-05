import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Estabelecimento } from './estabelecimento';
import { Model } from 'mongoose';

@Injectable()
export class EstabelecimentoService {
  constructor(
    @InjectModel('estabelecimentos')
    private readonly estabelecimentosModel: Model<Estabelecimento>,
  ) {}

  async getAll() {
    return await this.estabelecimentosModel.find().exec();
  }

  async getById(id: string) {
    return await this.estabelecimentosModel.findById(id).exec();
  }

  async create(estabelecimento: Estabelecimento) {
    const createdEstabelecimento = new this.estabelecimentosModel(
      estabelecimento,
    );
    return await createdEstabelecimento.save();
  }

  async update(id: string, estabelecimento: Estabelecimento) {
    await this.estabelecimentosModel
      .updateOne({ _id: id }, estabelecimento)
      .exec();
    return this.getById(id);
  }

  async delete(id: string) {
    return await this.estabelecimentosModel.deleteOne({ _id: id }).exec();
  }
}
