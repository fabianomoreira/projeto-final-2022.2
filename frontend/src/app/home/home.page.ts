import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { profissao } from '../model/profissao.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle: string = 'Home';

minhasProfissoes: profissao[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void{
  
    this.http.get<profissao[]>('http://localhost:3000/profissao').subscribe(caixinha => this.minhasProfissoes = caixinha );
  }


  perfileditar(){
    this.router.navigate(['/perfileditar']);
    setTimeout(this.refresh,10);
  }


  refresh(){
    location.reload();
  }


}