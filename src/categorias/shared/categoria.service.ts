import { Injectable } from '@nestjs/common';
import { Categoria } from './categoria';

@Injectable()
export class CategoriaService {

  categorias: Categoria[] = [
    {id: 1, nome: 'Todas'},
    {id: 2, nome: 'Gastronomia'},
    {id: 3, nome: 'Automotiva'},
    {id: 4, nome: 'Todas'},
    {id: 5, nome: 'Todas'},
    {id: 6, nome: 'Todas'},
    {id: 7, nome: 'Todas'},
    {id: 8, nome: 'Todas'},
    {id: 9, nome: 'Todas'},
    {id: 10, nome: 'Todas'},
  ];

  getAll(){
    return this.categorias;
  }

  getById(id: number){
    const categoria = this.categorias.find((value) => value.id == id);
    return categoria;
  }

  create(categoria: Categoria){
  let lastId= 0;
  if (this.categorias.length > 0){
    lastId = this.categorias[this.categorias.length-1].id;
  }
  categoria.id = lastId + 1;
  this.categorias.push(categoria);

  return categoria;
  }

  update(categoria: Categoria){
    const oldCategoria = this.getById(categoria.id);
    if (oldCategoria){
      oldCategoria.nome = categoria.nome;
    }
    return oldCategoria;
  }

  delete(id: number){
    const index = this.categorias.findIndex((value) => value.id);
    this.categorias.splice(index, 1);
  }



}
