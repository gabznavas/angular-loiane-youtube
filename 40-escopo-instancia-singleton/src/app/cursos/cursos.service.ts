import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: string[] = ['Angular', 'Spring Boot']

  getCursos() {
    return [...this.cursos];
  }

  addCurso(curso: string) {
    this.cursos.push(curso)
  }
}