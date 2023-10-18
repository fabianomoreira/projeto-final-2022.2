import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlanoPageRoutingModule } from './plano-routing.module';

import { PlanoPage } from './plano.page';
import { HeaderModule } from '../componentes/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanoPageRoutingModule,
    HeaderModule,
  ],
  declarations: [PlanoPage]
})
export class PlanoPageModule {}