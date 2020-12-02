import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemperoPage } from './tempero.page';

const routes: Routes = [
  {
    path: '',
    component: TemperoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemperoPageRoutingModule {}
