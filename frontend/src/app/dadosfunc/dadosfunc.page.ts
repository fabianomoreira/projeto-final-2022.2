import { Component, OnInit } from '@angular/core';
import { localidade } from '../model/localidade.model';
import { HttpClient } from '@angular/common/http';
import { profissao } from '../model/profissao.model';

@Component({
  selector: 'app-dadosfunc',
  templateUrl: './dadosfunc.page.html',
  styleUrls: ['./dadosfunc.page.scss'],
})
export class DadosfuncPage implements OnInit {

meusLocais: localidade[] = [];
minhasProfissoes: profissao[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void{
    this.http.get<localidade[]>('http://localhost:3000/localidade').subscribe(caixinha => this.meusLocais = caixinha );

    this.http.get<profissao[]>('http://localhost:3000/profissao').subscribe(caixinha => this.minhasProfissoes = caixinha );
  }

}
