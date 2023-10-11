import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecuperePage } from './recupere.page';

const routes: Routes = [
  {
    path: '',
    component: RecuperePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecuperePageRoutingModule {}
