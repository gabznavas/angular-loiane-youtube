import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AlunosService } from '../services/alunos.service';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.scss'
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno!: Aluno 
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
    // this.alunoInscricao = this.route.params.subscribe(
    //   (data: any) => {
    //     const id = Number(data.id)
    //     const aluno = this.alunosService.getAluno(id)

    //     if(aluno) {
    //       this.aluno = aluno
    //     } else {
    //       this.aluno = {}
    //     }
    //   }
    // )
    this.alunoInscricao = this.route.data.subscribe(
      (info: Data) => {
        this.aluno = info['aluno'] as Aluno
      }
    )
  }

  ngOnDestroy(): void {
    this.alunoInscricao.unsubscribe()
  }
}
