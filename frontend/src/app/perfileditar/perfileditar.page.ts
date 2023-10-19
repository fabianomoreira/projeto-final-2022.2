import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-perfileditar',
  templateUrl: './perfileditar.page.html',
  styleUrls: ['./perfileditar.page.scss'],
})
export class PerfileditarPage implements OnInit {

  pageTitle: string = 'perfil';
  


  constructor( private http: HttpClient ) {
  }
  currentRating: number = 0;

  rate(rating: number) {
    this.currentRating = rating;
  }


  ngOnInit(): void{

  }





}