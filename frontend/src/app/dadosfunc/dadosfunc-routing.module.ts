import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosfuncPage } from './dadosfunc.page';

const routes: Routes = [
  {
    path: '',
    component: DadosfuncPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosfuncPageRoutingModule {}
