import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from '../services/cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit, OnDestroy {


  cursos: any[] = []
  pagina: number = 0;

  queryParamsInscricao!: Subscription

  constructor(
    private cursoService: CursosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cursos = this.cursoService.getCursos();
    this.queryParamsInscricao = this.route.queryParams.subscribe((query: any) => {
      this.pagina = query.pagina
    })
  }

  ngOnDestroy(): void {
    this.queryParamsInscricao.unsubscribe()
  }

  proximaPagina() {
    this.pagina++
    this.router.navigate(['/cursos'], {
      queryParams: {
        pagina: this.pagina
      }
    })
  }
}
