import { Component,Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {
  @Input() pageTitle: string = '';


  constructor(private router: Router) { }

  ngOnInit() {}

  sair(){
    this.router.navigate(['/']);
    setTimeout(this.refresh,10);
  }

  
  perfil(){
    this.router.navigate(['/perfil']);
    setTimeout(this.refresh,10);
  }

  sobrenos(){
    this.router.navigate(['/sobrenos']);
    setTimeout(this.refresh,10);
  }

  perfileditar(){
    this.router.navigate(['/perfileditar']);
    setTimeout(this.refresh,10);
  }
  home(){
    this.router.navigate(['home']);
    setTimeout(this.refresh,10);
  }
  planos(){
    this.router.navigate(['plano']);
    setTimeout(this.refresh,10);
  }
  editar(){
    this.router.navigate(['anuncio']);
    setTimeout(this.refresh,10);
    
  }

  refresh(){
    location.reload();
  }

}