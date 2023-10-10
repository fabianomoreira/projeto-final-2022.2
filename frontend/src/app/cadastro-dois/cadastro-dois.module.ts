import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroDoisPageRoutingModule } from './cadastro-dois-routing.module';

import { CadastroDoisPage } from './cadastro-dois.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroDoisPageRoutingModule
  ],
  declarations: [CadastroDoisPage]
})
export class CadastroDoisPageModule {}
