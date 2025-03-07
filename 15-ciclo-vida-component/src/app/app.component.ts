import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  valorInicial = 5

  deletarCiclo = false;

  mudarValor() {
    this.valorInicial++;
  }

  destruirCiclo() {
    this.deletarCiclo = true
  }
}
