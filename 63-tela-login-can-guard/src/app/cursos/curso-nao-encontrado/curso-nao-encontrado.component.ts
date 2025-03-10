import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-curso-nao-encontrado',
  templateUrl: './curso-nao-encontrado.component.html',
  styleUrl: './curso-nao-encontrado.component.scss'
})
export class CursoNaoEncontradoComponent {

  constructor(
    private router: Router
  ) {}

  goToCursos() {
    this.router.navigate(['/cursos'])
  }
}
