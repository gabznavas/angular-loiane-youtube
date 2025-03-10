import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'cursos',
    canActivate: [AuthGuard], 
    loadChildren: () => import('../app/cursos/cursos.module')
      .then(m => m.CursosModule)
  },
  {
    path: 'alunos',
    canActivate: [AuthGuard],  
    loadChildren: () => import('../app/alunos/alunos.module')
      .then(m => m.AlunosModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
