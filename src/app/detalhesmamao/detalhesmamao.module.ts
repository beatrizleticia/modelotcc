import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalhesmamaoPageRoutingModule } from './detalhesmamao-routing.module';

import { DetalhesmamaoPage } from './detalhesmamao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalhesmamaoPageRoutingModule
  ],
  declarations: [DetalhesmamaoPage]
})
export class DetalhesmamaoPageModule {}
