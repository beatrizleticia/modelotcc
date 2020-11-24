import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarrinhocomprasPageRoutingModule } from './carrinhocompras-routing.module';

import { CarrinhocomprasPage } from './carrinhocompras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarrinhocomprasPageRoutingModule
  ],
  declarations: [CarrinhocomprasPage]
})
export class CarrinhocomprasPageModule {}
