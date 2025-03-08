import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-pipes',
  templateUrl: './exemplo-pipes.component.html',
  styleUrl: './exemplo-pipes.component.scss'
})
export class ExemploPipesComponent {

  livros: string[] = ['Angular', 'Spring Boot']
  filtro: string = ''

  addCurso(input: HTMLInputElement) {
    this.livros = [input.value, ...this.livros]
    input.value = ''
  }

  obterCursos() {
    if(!this.livros || this.livros.length === 0) {
      return []
    }
    
    return this.livros
      .filter(item => item.toLocaleLowerCase()
        .includes(this.filtro.toLocaleLowerCase())
      )
  }
}
