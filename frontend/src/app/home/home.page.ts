import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { usuario } from '../model/cadastro.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle: string = 'Home';
  dadosDaTabela: usuario[] = [];

  
  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void{
    this.http.get('http://localhost:3000/usuario')
    .subscribe((data: any) => {
      this.dadosDaTabela = data;
    });

  }

  


  perfileditar(){
    this.router.navigate(['/perfileditar']);
    setTimeout(this.refresh,10);
  }


  refresh(){
    location.reload();
  }


}