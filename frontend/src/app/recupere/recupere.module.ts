import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecuperePageRoutingModule } from './recupere-routing.module';

import { RecuperePage } from './recupere.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecuperePageRoutingModule
  ],
  declarations: [RecuperePage]
})
export class RecuperePageModule {}
