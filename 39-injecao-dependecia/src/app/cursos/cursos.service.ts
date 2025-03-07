import { Injectable } from "@angular/core";

@Injectable()
export class CursosService {
  getCursos() {
    const cursos: string[] = ['Angular', 'Spring Boot']
    return cursos;
  }
}