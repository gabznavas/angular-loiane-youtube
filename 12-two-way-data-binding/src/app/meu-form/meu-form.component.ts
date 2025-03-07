import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-form',
  templateUrl: './meu-form.component.html',
  styleUrl: './meu-form.component.scss'
})
export class MeuFormComponent {
  nome: string = ''

  pessoa = {
    nome: '',
    idade: 20,
  }

  onInput(event: Event) {
    const target = (event.target as HTMLInputElement)
    this.nome = target.value;
  }
}
