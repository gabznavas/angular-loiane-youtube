import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: string[] = ['Java', 'Angular']

  constructor(
  ) { }

  getCursos() {
    return this.cursos
  }
}
