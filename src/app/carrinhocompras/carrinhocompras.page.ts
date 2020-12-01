import { Component, OnInit } from '@angular/core';

import { Bancodedados001Service } from './../bancodedados001.service';

@Component({
  selector: 'app-carrinhocompras',
  templateUrl: './carrinhocompras.page.html',
  styleUrls: ['./carrinhocompras.page.scss'],
})
export class CarrinhocomprasPage implements OnInit {

  total = 0;
  subtotal = 0;


  constructor(public bd:Bancodedados001Service) { }
 
  ngOnInit(){

  }


  public maisProd(p: number) {
    this.bd.produtos[p - 1].quantidade += 1;
    this.bd.produtos[p - 1].subtotal = this.bd.produtos[p - 1].quantidade * this.bd.produtos[p - 1].preco;
    this.calculaTotal();
  }

  public menosProd(p: number) {
    this.bd.produtos[p - 1].quantidade -= 1;
    this.bd.produtos[p - 1].subtotal = this.bd.produtos[p - 1].quantidade * this.bd.produtos[p - 1].preco;
    this.calculaTotal();
  }

  calculaTotal() {
    let t: number = 0;
    for(let i = 0; i < this.bd.produtos.length; i++){
      t = t + this.bd.produtos[i].subtotal;
    }
    return this.total = t;
  }

  deletar(p: number) {
    this.bd.excluir(p);
    this.calculaTotal();
  }
}
