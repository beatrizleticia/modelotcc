import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detalhes1Page } from './detalhes1.page';

const routes: Routes = [
  {
    path: '',
    component: Detalhes1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detalhes1PageRoutingModule {}
