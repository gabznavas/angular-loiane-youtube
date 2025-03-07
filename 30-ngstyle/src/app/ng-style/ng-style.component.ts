import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.scss'
})
export class NgStyleComponent {
  tamanhoFonte: number = 20
  ativo: boolean = true

  toggleAtivo() {
    this.ativo = !this.ativo
  }
}
