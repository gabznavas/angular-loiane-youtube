import { EventEmitter, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  alunosMudados = new EventEmitter<any[]>();

  private alunos: any[] = [
    { id: 1, nome: 'Aluno1', email: 'aluno01@email.com' },
    { id: 2, nome: 'Aluno2', email: 'aluno02@email.com' },
    { id: 3, nome: 'Aluno3', email: 'aluno03@email.com' },
  ]

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

  editar(id: any, aluno: any) {
    const alunoIndex = this.alunos.findIndex(aluno => aluno.id === id)
    if(alunoIndex >= 0) {
      this.alunos[alunoIndex] = {...aluno}
      this.alunosMudados.emit(this.alunos)
    }
  }
}
