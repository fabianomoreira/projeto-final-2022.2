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

  handleImageUpload(event: Event, form: any) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target) {
          // O conteúdo da imagem em base64 estará em e.target.result
          const base64Image = e.target.result as string;
          console.log(base64Image);
          form.value.img_documento = base64Image;

        } else {
          console.error('Falha na conversão para base64. e.target é nulo.');
        }
      };

      reader.readAsDataURL(file);
    } else {
      console.error('Nenhum arquivo selecionado');
    }
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