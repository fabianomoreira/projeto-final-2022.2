import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { IonicModule } from '@ionic/angular';
import { DadosfuncPageRoutingModule } from 'src/app/dadosfunc/dadosfunc-routing.module';



@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
    DadosfuncPageRoutingModule,
  ]
 
})
export class HeaderModule { }
