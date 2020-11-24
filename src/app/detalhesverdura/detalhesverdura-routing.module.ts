import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesverduraPage } from './detalhesverdura.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesverduraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesverduraPageRoutingModule {}
