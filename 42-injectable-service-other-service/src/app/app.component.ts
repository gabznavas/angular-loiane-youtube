import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CursoService } from './services/curso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cursos: string[] = []

  constructor(
    private cursoService: CursoService
  ) { }

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos
  }

  addCurso(input: HTMLInputElement) {
    this.cursoService.addCurso(input.value)
    this.cursos = this.cursoService.getCursos
    input.value = "";
  }
}
