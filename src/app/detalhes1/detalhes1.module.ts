import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detalhes1PageRoutingModule } from './detalhes1-routing.module';

import { Detalhes1Page } from './detalhes1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detalhes1PageRoutingModule
  ],
  declarations: [Detalhes1Page]
})
export class Detalhes1PageModule {}
