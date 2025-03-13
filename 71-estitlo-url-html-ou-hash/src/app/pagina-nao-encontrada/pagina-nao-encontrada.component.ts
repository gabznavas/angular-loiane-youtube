import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pagina-nao-encontrada',
  templateUrl: './pagina-nao-encontrada.component.html',
  styleUrl: './pagina-nao-encontrada.component.scss'
})
export class PaginaNaoEncontradaComponent {

  constructor(private location: Location) { }

  voltar() {
    this.location.back(); 
  }
}
