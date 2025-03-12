import { Injectable } from "@angular/core";
import { 
  ActivatedRouteSnapshot, 
  Resolve, 
  RouterStateSnapshot
 } from "@angular/router";
import { Observable } from "rxjs";
import { AlunosService } from "../services/alunos.service";
import { Aluno } from "../aluno";

@Injectable()
export class AlunoDetalheResolver implements Resolve<Aluno> {

  constructor(
    private alunoService: AlunosService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<any> | any {
    console.log('Aluno Detalhe Resolver called');
    let id = route.params['id'];
    return this.alunoService.getAluno(Number(id))
  }
}