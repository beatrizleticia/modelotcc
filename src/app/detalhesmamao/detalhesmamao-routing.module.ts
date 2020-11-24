import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalhesmamaoPage } from './detalhesmamao.page';

const routes: Routes = [
  {
    path: '',
    component: DetalhesmamaoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalhesmamaoPageRoutingModule {}
