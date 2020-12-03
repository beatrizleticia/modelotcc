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
      texto:'(Destaques)',
      quantidade: 0,
      preco: 5.77,
      subtotal: 0
    },    {
      codigo: 2,
      nome: 'Abacaxi',
      imagem: 'assets/abacaxi.jpg',
      texto:'(Oferta)',
      quantidade: 0,
      preco: 7.99,
      subtotal: 0
    },    {
      codigo: 3,
      nome: 'Manga',
      imagem: 'assets/manga.jpg',
      quantidade: 0,
      preco: 5.29,
      subtotal: 0
    },    {
      codigo: 4,
      nome: 'Mamão',
      imagem: 'assets/mamao.jpg',
      quantidade: 0,
      preco: 5.75,
      subtotal: 0
    },    {
      codigo: 5,
      nome: 'Abacate',
      imagem: 'assets/abacate.jpg',
      quantidade: 0,
      preco: 16.90,
      subtotal: 0
    },   {
      codigo: 6,
      nome: 'Banana',
      imagem: 'assets/banana.jpg',
      quantidade: 0,
      texto:'(Populares)',
      preco: 4.39,
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
      preco: 7.76,
      subtotal: 0
    },   {
      codigo: 9,
      nome: 'Goiaba',
      imagem: 'assets/goiaba.jpg',
      quantidade: 0,
      preco: 9.90,
      subtotal: 0
    },   {
      codigo: 10,
      nome: 'Kiwi',
      imagem: 'assets/kiwi.jpg',
      quantidade: 0,
      preco: 22.90,
      subtotal: 0
    },   {
      codigo: 11,
      nome: 'Laranja',
      imagem: 'assets/laranja.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    },   {
      codigo: 12,
      nome: 'Limão',
      imagem: 'assets/limao.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    },   {
      codigo: 13,
      nome: 'Melão',
      imagem: 'assets/melao.jpg',
      quantidade: 0,
      preco: 7.99,
      subtotal: 0
    },   {
      codigo: 14,
      nome: 'Pera',
      imagem: 'assets/pera.jpg',
      quantidade: 0,
      preco: 14.99,
      subtotal: 0
    },   {
      codigo: 15,
      nome: 'Pessego',
      imagem: 'assets/pessego.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 16,
      nome: 'Abobrinha',
      imagem: 'assets/abobrinha.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 17,
      nome: 'Aspargo',
      imagem: 'assets/aspargo.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 18,
      nome: 'Batata Inglesa',
      imagem: 'assets/batatainglesa.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 19,
      nome: 'Batata Doce',
      imagem: 'assets/batatasdoce.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 20,
      nome: 'Berinjela',
      imagem: 'assets/berinjela.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 21,
      nome: 'Beterraba',
      imagem: 'assets/beterraba.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 22,
      nome: 'Cebola',
      imagem: 'assets/cebola.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 23,
      nome: 'Cenoura',
      imagem: 'assets/cenoura.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 24,
      nome: 'Chuchu',
      imagem: 'assets/chuchu.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 25,
      nome: 'Jiló',
      imagem: 'assets/jilo.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 26,
      nome: 'Mandioca',
      imagem: 'assets/Mandioca.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 27,
      nome: 'Mandioquinha',
      imagem: 'assets/mandioquinha.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 28,
      nome: 'Milho',
      imagem: 'assets/milho.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 29,
      nome: 'Moranga',
      imagem: 'assets/moranga.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 30,
      nome: 'Nabo',
      imagem: 'assets/nabo.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 31,
      nome: 'Pepino',
      imagem: 'assets/pepino.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 32,
      nome: 'Pepino Caipira',
      imagem: 'assets/pepinocaipira.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 33,
      nome: 'Quiabo',
      imagem: 'assets/quiabo.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    },   {
      codigo: 34,
      nome: 'Rabanete',
      imagem: 'assets/rabanete.jpg',
      quantidade: 0,
      preco: 12.99,
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
