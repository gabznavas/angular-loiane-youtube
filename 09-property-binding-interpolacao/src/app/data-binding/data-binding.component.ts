import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.scss'
})
export class DataBindingComponent {
  url: string = 'http://github.com/gabznavas'
  cursoAngular: boolean = true;
  urlImage = 'https://www.4devs.com.br/4devs_gerador_imagem.php?acao=gerar_imagem&txt_largura=320&txt_altura=240&extensao=png&fundo_r=0.06274509803921569&fundo_g=0.996078431372549&fundo_b=0.9568627450980393&texto_r=0&texto_g=0&texto_b=0&texto=Gerador Imagem %234Devs&tamanho_fonte=10';

  getValor() {
    return 1+2
  }

  getCurtirCurso() {
    return true
  }
}
