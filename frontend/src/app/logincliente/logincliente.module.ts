import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginclientePageRoutingModule } from './logincliente-routing.module';

import { LoginclientePage } from './logincliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginclientePageRoutingModule,

    IonicModule.forRoot({
      scrollAssist: false, // Configuração para desativar o scroll assist
    }),
    // ...
  ],
  declarations: [LoginclientePage],
  bootstrap: [LoginclientePage],
})
export class LoginclientePageModule {}
