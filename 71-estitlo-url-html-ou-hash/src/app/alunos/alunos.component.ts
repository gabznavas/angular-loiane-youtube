import { Component, OnInit } from '@angular/core';
import { AlunosService } from './services/alunos.service';
import { Aluno } from './aluno';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrl: './alunos.component.scss'
})
export class AlunosComponent implements OnInit {
  alunos: Aluno[] = []

  constructor(private alunosService: AlunosService) { }

  ngOnInit(): void {
    this.alunos = this.alunosService.getAlunos();
    this.alunosService.alunosMudados.subscribe(
      newAlunos => {
        this.alunos = newAlunos
      }
    )
  }
}
