import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-dadosfunc',
  templateUrl: './dadosfunc.page.html',
  styleUrls: ['./dadosfunc.page.scss'],
})
export class DadosfuncPage implements OnInit {
  pageTitle: string = 'Dados';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  //Este construtor é parte de uma classe e serve para injetar uma instância do serviço HttpClient na classe onde ele está definido.
constructor(private http: HttpClient, ) { }
//O HttpClient é um serviço fornecido pelo Angular que permite fazer solicitações HTTP, como GET, POST, PUT, DELETE, etc.,



  ngOnInit() {
  }

  dadosfunc(form: any) {
    // Suponha que você tenha um ID real (substitua '123' pelo ID real)
    const id = '1';

    this.http.patch(`http://localhost:3000/dadosfunc/${id}`, form.value, this.httpOptions).subscribe(
      (response) => {
        // Tratar a resposta do servidor, se necessário
        console.log('Resposta do servidor:', response);
      },
      (error) => {
        // Lidar com erros, se houver algum
        console.error('Erro na solicitação:', error);
      }
    );
  }
}


