import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlunosModule } from './alunos/alunos.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
  ],
  providers: [AuthService, AuthGuard],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlunosModule,
    FormsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
