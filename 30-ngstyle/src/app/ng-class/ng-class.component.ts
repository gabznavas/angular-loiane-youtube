import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrl: './ng-class.component.scss'
})
export class NgClassComponent {
  meuFavorito: boolean = true

  likeToggle() {
    this.meuFavorito = !this.meuFavorito
  }
}
