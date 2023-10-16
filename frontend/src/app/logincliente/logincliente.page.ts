import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logincliente',
  templateUrl: './logincliente.page.html',
  styleUrls: ['./logincliente.page.scss'],
})
export class LoginclientePage implements OnInit {
 


  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private router: Router, private http:HttpClient) {}

  ngOnInit() {
  }
  login(form:any){
    /* console.log(form.value); */
   /*  alert(form.value.titulo + " " + form.value.url); */
    /* document.write("<strong>Título: </strong>" + form.value.titulo + "<br><hr>" + "<strong>URL: </strong>"+ form.value.url); */
    /* this.dados = form.value */

    /* Utilizando a ferramenta httpclient para cadastro */
    const userData = { email: this.email, senha: this.senha};



    this.http.post('http://localhost:3000/login', userData).subscribe();
    
  }

 



  recupere(){
    this.router.navigate(['/recupere']);
  }
}


