import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SobrenosPage } from './sobrenos.page';

const routes: Routes = [
  {
    path: '',
    component: SobrenosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SobrenosPageRoutingModule {}
