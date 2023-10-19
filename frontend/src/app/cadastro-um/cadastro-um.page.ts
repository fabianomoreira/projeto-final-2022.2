import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-um',
  templateUrl: './cadastro-um.page.html',
  styleUrls: ['./cadastro-um.page.scss'],
})
export class CadastroUmPage implements OnInit {

  
  //httpOptions é uma variável que armazena opções de configuração para solicitações HTTP, em particular para solicitações do tipo POST, PUT ou qualquer outra solicitação que envolva o envio de dados para um servidor. Nesse caso, as opções são configuradas para enviar o conteúdo no formato JSON.
  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
    //Aqui, você está definindo os cabeçalhos da solicitação HTTP. O cabeçalho Content-Type é definido como 'application/json'.
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


  // cadastro(form: any) Esta é uma função chamada cadastro que aceita um parâmetro form de qualquer tipo (any). Geralmente, form provavelmente se refere a um formulário HTML que contém dados que você deseja enviar para um servidor.|
  cadastro(form:any){
    //this.http.post('http://localhost:3000/usuario', form.value, this.httpOptions): Esta linha faz uma solicitação HTTP POST para o URL 'http://localhost:3000/usuario'. 
    //subscribe(): Esta função indica que você está se inscrevendo para observar a resposta da solicitação HTTP. 
    //O código envia uma solicitação HTTP POST para 'http://localhost:3000/usuario' com os dados do formulário form.value e espera por uma resposta.

   
    /* Utilizando a ferramenta httpclient para cadastro */
    this.http.post('http://localhost:3000/usuario',form.value, this.httpOptions).subscribe();
  }
}