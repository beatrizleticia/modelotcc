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
    }, 
    
    
    
    
    
    
    
    {
      codigo: 16,
      nome: 'Abobrinha',
      imagem: 'assets/abobrinha.jpg',
      quantidade: 0,
      preco: 9.99,
      subtotal: 0
    },   {
      codigo: 17,
      nome: 'Vagem',
      imagem: 'assets/vagem.jpg',
      texto:'(Populares)',
      quantidade: 0,
      preco: 7.50,
      subtotal: 0
    },   {
      codigo: 18,
      nome: 'Batata Inglesa',
      imagem: 'assets/batatainglesa.jpg',
      texto:'(Populares)',
      quantidade: 0,
      preco: 4.69,
      subtotal: 0
    },   {
      codigo: 19,
      nome: 'Batata Doce',
      imagem: 'assets/batatasdoce.jpg',
      quantidade: 0,
      preco: 3.99,
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
      preco: 4.99,
      subtotal: 0
    },   {
      codigo: 22,
      nome: 'Cebola',
      imagem: 'assets/cebola.jpg',
      quantidade: 0,
      preco: 4.99,
      subtotal: 0
    },   {
      codigo: 23,
      nome: 'Cenoura',
      imagem: 'assets/cenoura.jpg',
      quantidade: 0,
      preco: 4.69,
      subtotal: 0
    },   {
      codigo: 24,
      nome: 'Chuchu',
      imagem: 'assets/chuchu.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    },   {
      codigo: 25,
      nome: 'Jiló',
      imagem: 'assets/jilo.jpg',
      quantidade: 0,
      preco: 9.90,
      subtotal: 0
    },   {
      codigo: 26,
      nome: 'Mandioca',
      imagem: 'assets/Mandioca.jpg',
      quantidade: 0,
      preco: 3.29,
      subtotal: 0
    },   {
      codigo: 27,
      nome: 'Mandioquinha',
      imagem: 'assets/mandioquinha.jpg',
      quantidade: 0,
      preco: 10.90,
      subtotal: 0
    },   {
      codigo: 28,
      nome: 'Milho',
      imagem: 'assets/milho.jpg',
      quantidade: 0,
      preco: 7.99,
      subtotal: 0
    },   {
      codigo: 29,
      nome: 'Moranga',
      imagem: 'assets/moranga.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    },   {
      codigo: 30,
      nome: 'Nabo',
      imagem: 'assets/nabo.jpg',
      quantidade: 0,
      preco: 4.65,
      subtotal: 0
    },   {
      codigo: 31,
      nome: 'Pepino',
      imagem: 'assets/pepino.jpg',
      texto:'(Oferta)',
      quantidade: 0,
      preco: 3.49,
      subtotal: 0
    },   {
      codigo: 32,
      nome: 'Pepino Caipira',
      imagem: 'assets/pepinocaipira.jpg',
      quantidade: 0,
      preco: 4.85,
      subtotal: 0
    },   {
      codigo: 33,
      nome: 'Quiabo',
      imagem: 'assets/quiabo.jpg',
      quantidade: 0,
      preco: 9.90,
      subtotal: 0
    },   {
      codigo: 34,
      nome: 'Rabanete',
      imagem: 'assets/rabanete.jpg',
      quantidade: 0,
      preco: 4.99,
      subtotal: 0
    }





    ,   {
      codigo: 35,
      nome: 'Acelga',
      imagem: 'assets/acelga.jpg',
      quantidade: 0,
      preco: 5.90,
      subtotal: 0
    },   {
      codigo: 36,
      nome: 'Agrião',
      imagem: 'assets/agriao.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    },   {
      codigo: 37,
      nome: 'Alcachofra',
      imagem: 'assets/alcachofra.jpg',
      quantidade: 0,
      preco: 7.99,
      subtotal: 0
    },   {
      codigo: 38,
      nome: 'Alface',
      imagem: 'assets/alface.jpg',
      texto:'(Populares)',
      quantidade: 0,
      preco: 4.00,
      subtotal: 0
    },   {
      codigo: 39,
      nome: 'Alface Roxa',
      imagem: 'assets/alfaceroxa.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    },   {
      codigo: 40,
      nome: 'Alho Poró',
      imagem: 'assets/alhoporo.jpg',
      quantidade: 0,
      preco: 5.99,
      subtotal: 0
    },   {
      codigo: 41,
      nome: 'Almeirão',
      imagem: 'assets/almeirao.jpg',
      texto:'(Destaques)',
      quantidade: 0,
      preco: 2.49,
      subtotal: 0
    },   {
      codigo: 42,
      nome: 'Brocolis',
      imagem: 'assets/brocolis.jpg',
      quantidade: 0,
      preco: 6.99,
      subtotal: 0
    },   {
      codigo: 43,
      nome: 'Cebola',
      imagem: 'assets/cebola.jpg',
      quantidade: 0,
      preco: 4.99,
      subtotal: 0
    },   {
      codigo: 44,
      nome: 'Cebolinha',
      imagem: 'assets/cebolinha.jpg',
      quantidade: 0,
      preco: 2.99,
      subtotal: 0
    },   {
      codigo: 45,
      nome: 'Chicória',
      imagem: 'assets/chicoria.jpg',
      quantidade: 0,
      preco: 5.90,
      subtotal: 0
    },   {
      codigo: 46,
      nome: 'Chuchu',
      imagem: 'assets/chuchu.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    },   {
      codigo: 47,
      nome: 'Couve',
      imagem: 'assets/couve.jpg',
      quantidade: 0,
      preco: 5.00,
      subtotal: 0
    },   {
      codigo: 48,
      nome: 'Escarola',
      imagem: 'assets/escarola.jpg',
      quantidade: 0,
      preco: 2.15,
      subtotal: 0
    },   {
      codigo: 49,
      nome: 'Repolho',
      imagem: 'assets/repolho.jpg',
      quantidade: 0,
      preco: 4.49,
      subtotal: 0
    },   {
      codigo: 50,
      nome: 'Rúcula',
      imagem: 'assets/rucula.jpg',
      quantidade: 0,
      preco: 5.89,
      subtotal: 0
    }, 
    
    
    
    
    
    
    
    {
      codigo: 51,
      nome: 'Açafrão',
      imagem: 'assets/acafrao.jpg',
      quantidade: 0,
      preco: 8.35,
      subtotal: 0
    },   {
      codigo: 52,
      nome: 'Alecrim',
      imagem: 'assets/alecrim.jpg',
      quantidade: 0,
      preco: 4.20,
      subtotal: 0
    },   {
      codigo: 53,
      nome: 'Alho',
      imagem: 'assets/alho.jpg',
      texto:'(Destaques)',
      quantidade: 0,
      preco: 21.00,
      subtotal: 0
    },   {
      codigo: 54,
      nome: 'Gengibre',
      imagem: 'assets/gengibre.jpg',
      quantidade: 0,
      preco: 18.90,
      subtotal: 0
    },   {
      codigo: 55,
      nome: 'Hortelã',
      imagem: 'assets/hortela.jpg',
      quantidade: 0,
      preco: 9.90,
      subtotal: 0
    },   {
      codigo: 56,
      nome: 'Manjericão',
      imagem: 'assets/manjericao.jpg',
      quantidade: 0,
      preco: 4.99,
      subtotal: 0
    },   {
      codigo: 57,
      nome: 'Oregano',
      imagem: 'assets/oregano.jpg',
      quantidade: 0,
      preco: 11.89,
      subtotal: 0
    },   {
      codigo: 58,
      nome: 'Noz Moscada',
      imagem: 'assets/nozmoscada.jpg',
      quantidade: 0,
      preco: 4.99,
      subtotal: 0
    },   {
      codigo: 59,
      nome: 'Pimenta Calabresa',
      imagem: 'assets/pimentacalabresa.jpg',
      quantidade: 0,
      preco: 9.71,
      subtotal: 0
    },   {
      codigo: 60,
      nome: 'Pimenta Malagueta',
      imagem: 'assets/pimentamalagueta.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    }






    ,   {
      codigo: 61,
      nome: 'Amaranto',
      imagem: 'assets/amaranto.jpg',
      quantidade: 0,
      preco: 9.99,
      subtotal: 0
    }
    ,   {
      codigo: 62,
      nome: 'Ervilha',
      imagem: 'assets/ervilha.jpg',
      quantidade: 0,
      preco: 3.99,
      subtotal: 0
    }
    ,   {
      codigo: 63,
      nome: 'Feijão Branco',
      imagem: 'assets/feijaobranco.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    }
    ,   {
      codigo: 64,
      nome: 'Feijão Preto',
      imagem: 'assets/feijaopreto.jpg',
      quantidade: 0,
      preco: 12.99,
      subtotal: 0
    }
    ,   {
      codigo: 65,
      nome: 'Grão de Bico',
      imagem: 'assets/graodebico.jpg',
      texto:'(Oferta)',
      quantidade: 0,
      preco: 7.80,
      subtotal: 0
    }  ,   {
      codigo: 66,
      nome: 'Lentilha',
      imagem: 'assets/lentilha.jpg',
      quantidade: 0,
      preco: 11.99,
      subtotal: 0
    }  ,   {
      codigo: 67,
      nome: 'Quinoa',
      imagem: 'assets/quinoa.jpg',
      quantidade: 0,
      preco: 2.49,
      subtotal: 0
    }  ,   {
      codigo: 68,
      nome: 'Soja',
      imagem: 'assets/soja.jpg',
      quantidade: 0,
      preco: 7.55,
      subtotal: 0
    }  ,   {
      codigo: 69,
      nome: 'Vagem',
      imagem: 'assets/vagem.jpg',
      quantidade: 0,
      preco: 7.50,
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
