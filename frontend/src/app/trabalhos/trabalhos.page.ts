import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabalhos',
  templateUrl: './trabalhos.page.html',
  styleUrls: ['./trabalhos.page.scss'],
})
export class TrabalhosPage implements OnInit {
  showMore: boolean = false;

  constructor(private router: Router){}

  toggleMoreText() {
    this.showMore = !this.showMore;
  }

  ngOnInit() {
  }

}
