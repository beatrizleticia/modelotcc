import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Bancodedados001Service } from './../bancodedados001.service'

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.page.html',
  styleUrls: ['./detalhes.page.scss'],
})
export class DetalhesPage implements OnInit {

  produto = {
    codigo: 0,
    nome:'',
    imagem:'',
    quantidade: 0,
    preco: 0,
    subtotal: 0
  };

  constructor(
    private recebendo: ActivatedRoute,
    private bd: Bancodedados001Service
  ) { }

  ngOnInit() {
    this.recebendo.paramMap.subscribe(p =>{
      let i: number = (Number(p.get('codigo')) - 1);
      this.produto = {
        codigo: this.bd.produtos[i].codigo,
        nome: this.bd.produtos[i].nome,
        imagem: this.bd.produtos[i].imagem,
        quantidade: this.bd.produtos[i].quantidade,
        preco: this.bd.produtos[i].preco,
        subtotal: this.bd.produtos[i].subtotal,
      }
    });
  }

}
