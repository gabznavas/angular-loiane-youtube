import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.scss'
})
export class EventBindingComponent {

  valorAtual = ''

  valores: string[] = []

  isMouseOverOut = false

  botaoClicar() {
    alert('fui clicado')
  }

  onKeyup(event: KeyboardEvent) {
    this.valorAtual = (event.target as HTMLInputElement).value
  }

  salvarValor(value: string) {
    this.valores.push(value);
    this.valorAtual = '';
  }

  onMouseOverOutToggle() {
    this.isMouseOverOut = !this.isMouseOverOut
  }

}
