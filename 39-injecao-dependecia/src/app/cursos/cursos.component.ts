import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {

  cursos: string[] = []

  constructor(
    private cursosService: CursosService 
  ) {  }

  ngOnInit(): void {
   this.cursos = this.cursosService.getCursos();
  }
}

