import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../services/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss'
})
export class CursoDetalheComponent implements OnInit, OnDestroy {
  inscricao!: Subscription
  curso: any;
  id!: number

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cursoService: CursosService,
  ) { }


  ngOnInit(): void {
    this.inscricao = this.route.params.subscribe(params => {
      const id = params['id']
      try {
        const curso = this.cursoService.getCurso(Number(id))
        if(!curso) {
          this.router.navigate(['curso-nao-encontrado'])
        } else {
          this.curso = curso
          this.id = this.curso.id
        }
      } catch {
        this.router.navigate(['curso-nao-encontrado'])
          // redirect pra outra pagina
      }
    })
  }

  ngOnDestroy(): void {
    this.inscricao.unsubscribe();
  }
}
