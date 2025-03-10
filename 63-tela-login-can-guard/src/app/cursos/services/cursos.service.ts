import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos = [{
    id: 1,
    nome: 'Angular'
  }, {
    id: 2,
    nome: 'Spring Boot'
  },]

  constructor() { }

  getCursos() {
    return [...this.cursos]
  }

  getCurso(id: number) {
    const curso = this.cursos.find(curso => curso.id === id)
    return curso ? curso : null
  }
}
