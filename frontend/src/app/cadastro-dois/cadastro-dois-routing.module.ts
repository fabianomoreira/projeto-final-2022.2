import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroDoisPage } from './cadastro-dois.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroDoisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroDoisPageRoutingModule {}
