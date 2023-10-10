import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroUmPageRoutingModule } from './cadastro-um-routing.module';

import { CadastroUmPage } from './cadastro-um.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroUmPageRoutingModule
  ],
  declarations: [CadastroUmPage]
})
export class CadastroUmPageModule {}
