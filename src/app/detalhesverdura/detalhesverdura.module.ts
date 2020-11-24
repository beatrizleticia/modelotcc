import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesverduraPageRoutingModule } from './detalhesverdura-routing.module';

import { DetalhesverduraPage } from './detalhesverdura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesverduraPageRoutingModule
  ],
  declarations: [DetalhesverduraPage]
})
export class DetalhesverduraPageModule {}
