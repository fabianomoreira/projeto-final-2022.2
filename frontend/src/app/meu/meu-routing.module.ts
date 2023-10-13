import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeuPage } from './meu.page';

const routes: Routes = [
  {
    path: '',
    component: MeuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeuPageRoutingModule {}
