import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Bancodedados001Service {

  public produtos = [
    {
      codigo: 1,
      nome: 'Morango',
      imagem: 'assets/morango.jpg',
      quantidade: 0,
      preco: 6.99,
      subtotal: 0
    },    {
      codigo: 2,
      nome: 'Abacaxi',
      imagem: 'assets/abacaxi.jpg',
      quantidade: 0,
      preco: 7.29,
      subtotal: 0
    },    {
      codigo: 3,
      nome: 'Manga',
      imagem: 'assets/manga.jpg',
      quantidade: 0,
      preco: 6,
      subtotal: 0
    },    {
      codigo: 4,
      nome: 'Mamão',
      imagem: 'assets/mamao.jpg',
      quantidade: 0,
      preco: 5,
      subtotal: 0
    },    {
      codigo: 5,
      nome: 'Abacate',
      imagem: 'assets/abacate.jpg',
      quantidade: 0,
      preco: 9,
      subtotal: 0
    },   {
      codigo: 6,
      nome: 'Banana',
      imagem: 'assets/banana.jpg',
      quantidade: 0,
      preco: 4,
      subtotal: 0
    },   {
      codigo: 7,
      nome: 'Acerola',
      imagem: 'assets/acerola.jpg',
      quantidade: 0,
      preco: 10,
      subtotal: 0
    },   {
      codigo: 8,
      nome: 'Ameixa',
      imagem: 'assets/ameixa.jpg',
      quantidade: 0,
      preco: 8,
      subtotal: 0
    },   {
      codigo: 9,
      nome: 'Goiaba',
      imagem: 'assets/goiaba.jpg',
      quantidade: 0,
      preco: 9,
      subtotal: 0
    },   {
      codigo: 10,
      nome: 'Kiwi',
      imagem: 'assets/kiwi.jpg',
      quantidade: 0,
      preco: 23,
      subtotal: 0
    },   {
      codigo: 11,
      nome: 'Laranja',
      imagem: 'assets/laranja.jpg',
      quantidade: 0,
      preco: 4,
      subtotal: 0
    },   {
      codigo: 12,
      nome: 'Limão',
      imagem: 'assets/limao.jpg',
      quantidade: 0,
      preco: 4,
      subtotal: 0
    },   {
      codigo: 13,
      nome: 'Melão',
      imagem: 'assets/melao.jpg',
      quantidade: 0,
      preco: 5,
      subtotal: 0
    },   {
      codigo: 14,
      nome: 'Pera',
      imagem: 'assets/pera.jpg',
      quantidade: 0,
      preco: 15,
      subtotal: 0
    },   {
      codigo: 15,
      nome: 'Pessego',
      imagem: 'assets/pessego.jpg',
      quantidade: 0,
      preco: 14,
      subtotal: 0
    }
  ];

  public carrinho: Array<number> = [];

  constructor() { }

  incluir(cod: number) {
    let existe = false;
    for(let i = 0; i < this.carrinho.length; i ++) {
      if (this.carrinho[i] === cod){
        alert('Produto já esta incluso!');
        existe = true;
        break;
      }
    }
    if (existe === false) {
      this.carrinho.push(cod);
    }
  }

  excluir(cod: number){
    this.produtos[cod - 1].quantidade = 0;
    this.produtos[cod - 1].subtotal = 0;  
    this.carrinho.splice(cod - 1, 1);
  }
}
