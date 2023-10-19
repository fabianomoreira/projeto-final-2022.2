import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  pageTitle: string = 'Home';

  //Este construtor é parte de uma classe e serve para injetar uma instância do serviço HttpClient na classe onde ele está definido.
  constructor(private http: HttpClient, private router: Router) {}
  //O HttpClient é um serviço fornecido pelo Angular que permite fazer solicitações HTTP, como GET, POST, PUT, DELETE, etc.,

  ngOnInit(): void{
  
    
  }


  perfileditar(){
    this.router.navigate(['/perfileditar']);
    setTimeout(this.refresh,10);
  }


  refresh(){
    location.reload();
  }


}