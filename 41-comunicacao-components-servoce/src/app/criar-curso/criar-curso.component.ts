import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.scss',
})
export class CriarCursoComponent implements OnInit {

  constructor(
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {
  }

  criarCurso(curso: string) {
    this.cursoService.addCurso(curso)
  }
}
