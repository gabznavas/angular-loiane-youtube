import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../services/alunos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.scss'
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any = undefined
  alunoInscricao!: Subscription

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }
  
  ngOnInit(): void {
    this.alunoInscricao = this.route.params.subscribe(
      (data: any) => {
        const id = Number(data.id)
        const aluno = this.alunosService.getAluno(id)

        if(aluno) {
          this.aluno = aluno
        } else {
          this.aluno = {}
        }
      }
    )
  }

  ngOnDestroy(): void {
    this.alunoInscricao.unsubscribe()
  }
}
