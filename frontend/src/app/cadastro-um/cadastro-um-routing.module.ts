import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroUmPage } from './cadastro-um.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroUmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroUmPageRoutingModule {}
