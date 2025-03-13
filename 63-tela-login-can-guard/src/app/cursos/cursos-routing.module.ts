import { RouterModule, Routes } from "@angular/router";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursosComponent } from "./cursos.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { NgModule } from "@angular/core";

const routes: Routes = [
  {
    path: '',
    component: CursosComponent,
    children: [
      { path: ':id', component: CursoDetalheComponent },
      { path: 'curso-nao-encontrado', component: CursoNaoEncontradoComponent }
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
