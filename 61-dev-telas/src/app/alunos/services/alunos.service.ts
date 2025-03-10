import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Aluno1', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno2', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno3', email: 'aluno03@email.com' },
  ]

  constructor() { }

  getAlunos() {
    return this.alunos;
  }

  getAluno(id: number): any {
    const aluno = this.alunos.find(aluno => aluno.id === id)
    if (aluno) {
      return { ...aluno }
    }
    return null
  }
}
