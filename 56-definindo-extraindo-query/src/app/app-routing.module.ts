import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'curso/:id',
  component: CursoDetalheComponent
},{
  path: 'cursos',
  component: CursosComponent
},{
  path: 'curso-nao-encontrado',
  component: CursoNaoEncontradoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
