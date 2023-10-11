import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosfuncPageRoutingModule } from './dadosfunc-routing.module';

import { DadosfuncPage } from './dadosfunc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosfuncPageRoutingModule
  ],
  declarations: [DadosfuncPage]
})
export class DadosfuncPageModule {}
