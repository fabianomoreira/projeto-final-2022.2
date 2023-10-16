import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfileditarPageRoutingModule } from './perfileditar-routing.module';

import { PerfileditarPage } from './perfileditar.page';
import { HeaderModule } from '../componentes/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfileditarPageRoutingModule,
    HeaderModule,
  ],
  declarations: [PerfileditarPage]
})
export class PerfileditarPageModule {}
