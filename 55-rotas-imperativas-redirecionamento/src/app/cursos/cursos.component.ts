import { Component, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  cursos: any[] = []

  constructor(
    private cursoService: CursosService
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
  }
}
