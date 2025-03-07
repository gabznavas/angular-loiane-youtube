import { Component } from '@angular/core';

@Component({
  selector: 'app-operador-elvis',
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.scss'
})
export class OperadorElvisComponent {
  tarefa = {
    descricao: 'Descrição da tarefa',
    usuario: {
      nome: null
    }
  }
}
