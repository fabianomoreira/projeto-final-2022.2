import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { usuario } from '../model/cadastro.model';

@Component({
  selector: 'app-perfileditar',
  templateUrl: './perfileditar.page.html',
  styleUrls: ['./perfileditar.page.scss'],
})
export class PerfileditarPage implements OnInit {

  pageTitle: string = 'perfil';
  
  dadosDaTabela: usuario[] = [];

  constructor( private http: HttpClient ) {
  }
  currentRating: number = 0;

  rate(rating: number) {
    this.currentRating = rating;
  }


  ngOnInit(): void{
    this.http.get('http://localhost:3000/usuario')
    .subscribe((data: any) => {
      this.dadosDaTabela = data;
    });
  }





}