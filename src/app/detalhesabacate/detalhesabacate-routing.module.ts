import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesabacatePage } from './detalhesabacate.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesabacatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesabacatePageRoutingModule {}
