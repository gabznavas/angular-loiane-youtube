import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-criar-curso',
  templateUrl: './criar-curso.component.html',
  styleUrl: './criar-curso.component.scss',
})
export class CriarCursoComponent implements OnInit {

  cursos: string[] = []

  constructor(
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos()
  }

  criarCurso(curso: string) {
    alert('opa')
    this.cursoService.addCurso(curso)
  }
}
