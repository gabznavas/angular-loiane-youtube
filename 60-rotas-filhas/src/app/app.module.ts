import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CursosModule } from './cursos/cursos.module';
import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursosModule,
    AlunosModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
