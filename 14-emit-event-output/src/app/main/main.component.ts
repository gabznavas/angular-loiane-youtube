import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  valorInicial = 15

  onMudouValor(event: Event) {
    console.log(event);
    
  }
}
