import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesabacatePageRoutingModule } from './detalhesabacate-routing.module';

import { DetalhesabacatePage } from './detalhesabacate.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesabacatePageRoutingModule
  ],
  declarations: [DetalhesabacatePage]
})
export class DetalhesabacatePageModule {}
