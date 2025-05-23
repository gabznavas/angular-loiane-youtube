import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'cursos', loadChildren: () => import('../app/cursos/cursos.module')
      .then(m => m.CursosModule)
  },
  {
    path: 'alunos', loadChildren: () => import('../app/alunos/alunos.module')
      .then(m => m.AlunosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
