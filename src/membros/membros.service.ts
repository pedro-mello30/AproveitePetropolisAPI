import { Injectable } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin/dist';
import { Usuario } from '../usuarios/shared/usuario';

@Injectable()
export class MembrosService {
  
  constructor(
    private firebaseAuth: FirebaseAuthenticationService
  ) {
  }

  async getAll() {
    return await this.firebaseAuth.listUsers();
  }

  async getById(id: string) {
    return await this.firebaseAuth.getUser(id);
  }

  async create(usuario: Usuario) {
    const newUser = {
      displayName: usuario.nome,
      email: usuario.email,
      emailVerified: false,
      password: usuario.password,
      // phoneNumber: usuario.telefone,
      // photoURL: '',
      disabled: false,
    }

    return await this.firebaseAuth.createUser(newUser);
  }

  async update(id: string, usuario: Usuario) {
    const updatedUser = {
      displayName: usuario.nome,
      email: usuario.email,
      password: usuario.password,
      phoneNumber: usuario.telefone
    }
    return await this.firebaseAuth.updateUser(id, updatedUser);
  }

  async delete(id: string) {
    return await this.firebaseAuth.deleteUser(id);
  }
}
