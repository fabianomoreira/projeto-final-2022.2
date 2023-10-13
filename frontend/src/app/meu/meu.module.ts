import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeuPageRoutingModule } from './meu-routing.module';

import { MeuPage } from './meu.page';
import { HeaderModule } from '../componentes/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeuPageRoutingModule,
    HeaderModule,
  ],
  declarations: [MeuPage]
})
export class MeuPageModule {}