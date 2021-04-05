import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cupom } from './cupom';

@Injectable()
export class CupomService {

  constructor(@InjectModel('cupom') private readonly cupomModel: Model<Cupom>) {
  }

  async getAll(){
    return await this.cupomModel.find().exec();
  }

  async getById(id: string){
    return await this.cupomModel.findById({_id: id}).exec();
  }

  async create(cupom: Cupom){
    const cupomCreated = new this.cupomModel(cupom);
    return await cupomCreated.save();
  }

  async update(id: string, cupom: Cupom){
    await this.cupomModel.updateOne({_id: id}, cupom).exec();
    return this.getById(id);
  }

  async delete(id: string){
    return await this.cupomModel.deleteOne({_id: id}).exec();
  }

}
