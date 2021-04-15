import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Usuario } from './usuario';
import { Model } from 'mongoose';
import { CryptService } from '../../shared/services/crypt/crypt.service';
import { IUserRequest } from './iuser.request';
import { UserTypeEnum } from './user.type.enum';
import { IUserModel } from './iuser.model';

@Injectable()
export class UsuarioService {

  constructor(
    @InjectModel('usuarios') private readonly usuariosModel : Model<Usuario>,
    private cryptService: CryptService
  ) {
  }

  async getAll(){
    return await this.usuariosModel.find().exec();
  }

  async getById(id: string){
    return await this.usuariosModel.findById(id)
      .select('nome email type')
      .exec();
  }

  async getByEmail(email: string){
    return await this.usuariosModel.findOne({email})
      .exec();
  }

  private async create(user: IUserModel){
    const result = await this.usuariosModel.find({email: user.email}).exec();

    if(result.length > 0) {
      throw new Error('O email informado já está sendo usado');
    }

    user.password = await this.cryptService.crypt(user.password);

    const createdUsuario = new this.usuariosModel(user);
    return await createdUsuario.save();
  }


  async createAdmin(user: IUserRequest){
    return this.create({
      nome: user.nome,
      email: user.email,
      password: user.password,
      type: UserTypeEnum.admin
    })
  }

  async createMembro(user: IUserRequest){
    return this.create({
      nome: user.nome,
      email: user.email,
      password: user.password,
      type: UserTypeEnum.membro
    })
  }





  async update(id: string, usuario: Usuario){

    const userEntity = await this.getById(id);

    const { nome, email } = usuario;
    userEntity.nome = nome;
    userEntity.email = email;

    await this.usuariosModel.updateOne({_id: id}, userEntity).exec();
    return userEntity;
  }

  async delete(id: string){
    return await this.usuariosModel.deleteOne({_id: id}).exec();
  }

}
