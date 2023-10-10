import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrabalhosPage } from './trabalhos.page';

const routes: Routes = [
  {
    path: '',
    component: TrabalhosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrabalhosPageRoutingModule {}
