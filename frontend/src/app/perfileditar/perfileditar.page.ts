import { Component, OnInit } from '@angular/core';
import { localidade } from '../model/localidade.model';
import { profissao } from '../model/profissao.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfileditar',
  templateUrl: './perfileditar.page.html',
  styleUrls: ['./perfileditar.page.scss'],
})
export class PerfileditarPage implements OnInit {

  pageTitle: string = 'Editar';
  
  meusLocais: localidade[] = [];
minhasProfissoes: profissao[] = [];

  constructor( private http: HttpClient ) {
  }
  currentRating: number = 0;

  rate(rating: number) {
    this.currentRating = rating;
  }


  ngOnInit(): void{
    this.http.get<localidade[]>('http://localhost:3000/localidade').subscribe(caixinha => this.meusLocais = caixinha );

    this.http.get<profissao[]>('http://localhost:3000/profissao').subscribe(caixinha => this.minhasProfissoes = caixinha );
  
  }





}



