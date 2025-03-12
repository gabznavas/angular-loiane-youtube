import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-alunos-form',
  templateUrl: './alunos-form.component.html',
  styleUrl: './alunos-form.component.scss'
})
export class AlunosFormComponent {

  aluno: any = undefined
  alunoInscricao!: Subscription

  private formMudou: boolean = false

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alunosService: AlunosService
  ) {
  }

  finalizarEdicao() {
    this.alunosService.editar(this.aluno.id, this.aluno);
    this.router.navigate(['/alunos'])
  }

  ngOnInit(): void {
    this.alunoInscricao = this.route.params.subscribe(
      (data: any) => {
        const id = Number(data.id)
        const aluno = this.alunosService.getAluno(id)

        if (aluno) {
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

  onInput() {
    this.formMudou = true
    console.log('form mudou');
  }

  rotaPodeMudar() {
    let sair = true
    if (this.formMudou) {
      sair = confirm(
        `O formulário já começou a ser editado. Deseja sair dessa página?`
      )
    }

    return sair
  }
}
