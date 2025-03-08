import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  
  private cursos: string[] = ['Angular', 'Spring Boot']

  get getCursos() {
    return [...this.cursos]
  }

  constructor(
    private logService: LogService
  ) { }

  addCurso(curso: string) {
    this.logService.consoleLog(`[*] - Curso adicionado com ${this.cursos.length} items.`)
    this.cursos.push(curso)
  }
}
