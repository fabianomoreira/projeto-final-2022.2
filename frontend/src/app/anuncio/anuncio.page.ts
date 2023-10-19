import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})
export class AnuncioPage implements OnInit {
  pageTitle: string = 'Anúncio';

 //httpOptions é uma variável que armazena opções de configuração para solicitações HTTP, em particular para solicitações do tipo POST, PUT ou qualquer outra solicitação que envolva o envio de dados para um servidor. Nesse caso, as opções são configuradas para enviar o conteúdo no formato JSON.
 httpOptions = {
  headers: new HttpHeaders({'Content-Type' : 'application/json'})
   //Aqui, você está definindo os cabeçalhos da solicitação HTTP. O cabeçalho Content-Type é definido como 'application/json'.
};

  //Este construtor é parte de uma classe e serve para injetar uma instância do serviço HttpClient na classe onde ele está definido.
  constructor(private http: HttpClient, ) { }
  //O HttpClient é um serviço fornecido pelo Angular que permite fazer solicitações HTTP, como GET, POST, PUT, DELETE, etc.,
  
  ngOnInit() {
  }

  @ViewChild('fileInput') fileInput: any;

  selectFile() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Faça algo com o arquivo selecionado, como enviar para o servidor
      console.log('Arquivo selecionado:', selectedFile.name);
    }
  }

  /* redes(form: any){
    /* console.log(form.value); */
   /*  alert(form.value.titulo + " " + form.value.url); */
    /* document.write("<strong>Título: </strong>" + form.value.titulo + "<br><hr>" + "<strong>URL: </strong>"+ form.value.url); */
    /* this.dados = form.value */

    /* Utilizando a ferramenta httpclient para cadastro */
    // this.http.patch('http://localhost:3000/redes/:id',form.value, this.httpOptions).subscribe();
    
 // } 


 
// redes(form: any) Esta é uma função chamada redes que aceita um parâmetro form de qualquer tipo (any). Geralmente, form provavelmente se refere a um formulário HTML que contém dados que você deseja enviar para um servidor.|
 redes(form: any) {
  // Suponha que você tenha um ID real (substitua '123' pelo ID real)
  const id = '1';

  this.http.patch(`http://localhost:3000/redes/${id}`, form.value, this.httpOptions).subscribe(
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