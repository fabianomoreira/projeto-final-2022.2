import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-meu',
  templateUrl: './meu.page.html',
  styleUrls: ['./meu.page.scss'],
})
export class MeuPage implements OnInit {

  pageTitle: string = 'Editar';
  


  constructor( private http: HttpClient ) { }

  ngOnInit(): void{
    
  }

}