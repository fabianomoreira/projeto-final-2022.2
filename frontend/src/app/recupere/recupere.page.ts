import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recupere',
  templateUrl: './recupere.page.html',
  styleUrls: ['./recupere.page.scss'],
})
export class RecuperePage implements OnInit {
  pageTitle: string = 'Recupere' 

  constructor() { }

  ngOnInit() {
  }


  public alertButtons = ['OK'];
}
