import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhocomprasPage } from './carrinhocompras.page';

const routes: Routes = [
  {
    path: '',
    component: CarrinhocomprasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarrinhocomprasPageRoutingModule {}
