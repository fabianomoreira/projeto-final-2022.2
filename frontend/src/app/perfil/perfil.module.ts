import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { PerfilPage } from './perfil.page';

import { PerfilPageRoutingModule } from './perfil-routing.module';
import { HeaderModule } from '../componentes/header/header.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilPageRoutingModule,
    HeaderModule
  ],
  declarations: [PerfilPage]
})
export class PerfilPageModule {}
