import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincliente',
  templateUrl: './logincliente.page.html',
  styleUrls: ['./logincliente.page.scss'],
})
export class LoginclientePage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }


  recupere(){
    this.router.navigate(['/recupere']);
  }

}
