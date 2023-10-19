import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperePageRoutingModule } from './recupere-routing.module';

import { RecuperePage } from './recupere.page';
import { HeaderModule } from '../componentes/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperePageRoutingModule,
    HeaderModule
  ],
  declarations: [RecuperePage]
})
export class RecuperePageModule {}
