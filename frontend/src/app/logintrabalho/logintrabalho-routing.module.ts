import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogintrabalhoPage } from './logintrabalho.page';

const routes: Routes = [
  {
    path: '',
    component: LogintrabalhoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LogintrabalhoPageRoutingModule {}
