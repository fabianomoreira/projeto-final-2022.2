import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-anuncio',
  templateUrl: './anuncio.page.html',
  styleUrls: ['./anuncio.page.scss'],
})
export class AnuncioPage implements OnInit {
  pageTitle: string = 'Anúncio';
  constructor() { }

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
}

