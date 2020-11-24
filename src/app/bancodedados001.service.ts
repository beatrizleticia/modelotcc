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
      preco: 5.49,
      subtotal: 0
    },    {
      codigo: 2,
      nome: 'Abacaxi',
      imagem: 'assets/abacaxi.jpg',
      quantidade: 0,
      preco: 5.49,
      subtotal: 0
    },    {
      codigo: 3,
      nome: 'Pepino',
      imagem: 'assets/pepino.jpg',
      quantidade: 0,
      preco: 5.49,
      subtotal: 0
    },    {
      codigo: 4,
      produto: 'Cebola',
      imagem: 'assets/cebola.jpg',
      quantidade: 0,
      preco: 5.49,
      subtotal: 0
    },    {
      codigo: 5,
      produto: 'Abacate',
      imagem: 'assets/abacate.jpg',
      quantidade: 0,
      preco: 5.49,
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
