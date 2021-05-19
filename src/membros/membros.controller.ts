import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { FirebaseAuthenticationService } from '@aginix/nestjs-firebase-admin/dist';
import { JwtAdminAuthGuard } from '../auth/shared/admin/jwt-admin-auth.guard';
import { Usuario } from '../usuarios/shared/usuario';
import { MembrosService } from './membros.service';

@Controller('membros')
export class MembrosController {

  constructor(
    private membrosServices: MembrosService
  ) {}


  @UseGuards(JwtAdminAuthGuard)
  @Get()
  async getAll() : Promise<any> {
    return this.membrosServices.getAll();
  }

  @UseGuards(JwtAdminAuthGuard)
  @Get(':id')
  async getById(@Param('id') id: string): Promise<any> {
    return this.membrosServices.getById(id);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Post()
  async create(@Body() usuario: Usuario){
    return this.membrosServices.create(usuario);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Put(':id')
  async update(@Param('id') id: string, @Body() usuario: Usuario){
    return this.membrosServices.update(id, usuario);
  }

  @UseGuards(JwtAdminAuthGuard)
  @Delete(':id')
  async delete(@Param('id') id: string){
    return this.membrosServices.delete(id);
  }



}
