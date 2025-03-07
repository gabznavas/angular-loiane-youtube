import { Component } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrl: './diretiva-ngif.component.scss'
})
export class DiretivaNgifComponent {
  cursos: string[] = []

  mostrarCursos: boolean = true;

  addCurso(event: Event) {
    const curso = (event.target as HTMLInputElement).value
    this.cursos.push(curso)
  }

  mostrarEsconderCursos() {
    this.mostrarCursos = !this.mostrarCursos;
  }
}
