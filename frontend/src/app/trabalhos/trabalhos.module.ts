import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrabalhosPageRoutingModule } from './trabalhos-routing.module';

import { TrabalhosPage } from './trabalhos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrabalhosPageRoutingModule
  ],
  declarations: [TrabalhosPage]
})
export class TrabalhosPageModule {}
