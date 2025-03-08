import { Injectable, EventEmitter } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>()

  // não recomendado
  static criouNovoCurso = new EventEmitter<string>()

  cursos: string[] = ['Angular', 'Spring Boot']

  constructor() {
    console.log('CursosService');
    
  }

  getCursos() {
    return [...this.cursos];
  }

  addCurso(curso: string) {
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    CursosService.criouNovoCurso.emit(curso)
  }
}