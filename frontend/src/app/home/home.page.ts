import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  pageTitle: string = 'Home';

  constructor() {}

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

