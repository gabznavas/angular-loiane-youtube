import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [{
  path: '',
  component: HomeComponent
},{
  path: 'curso/:id',
  component: CursoDetalheComponent
},{
  path: 'cursos',
  component: CursosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
