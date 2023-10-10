import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginclientePage } from './logincliente.page';

const routes: Routes = [
  {
    path: '',
    component: LoginclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginclientePageRoutingModule {}
