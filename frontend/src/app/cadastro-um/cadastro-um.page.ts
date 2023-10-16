import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-um',
  templateUrl: './cadastro-um.page.html',
  styleUrls: ['./cadastro-um.page.scss'],
})
export class CadastroUmPage implements OnInit {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  insertUsuario(){
    
  }

  cadastro(form:any){
    /* console.log(form.value); */
   /*  alert(form.value.titulo + " " + form.value.url); */
    /* document.write("<strong>Título: </strong>" + form.value.titulo + "<br><hr>" + "<strong>URL: </strong>"+ form.value.url); */
    /* this.dados = form.value */

    /* Utilizando a ferramenta httpclient para cadastro */
    this.http.post('http://localhost:3000/usuario',form.value, this.httpOptions).subscribe();
    
  }
}

