import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TemperoPageRoutingModule } from './tempero-routing.module';

import { TemperoPage } from './tempero.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TemperoPageRoutingModule
  ],
  declarations: [TemperoPage]
})
export class TemperoPageModule {}
