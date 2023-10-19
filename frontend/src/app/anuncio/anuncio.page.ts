import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})
export class AnuncioPage implements OnInit {
  pageTitle: string = 'Anúncio';

  httpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  };

  constructor(private http: HttpClient, ) { }

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