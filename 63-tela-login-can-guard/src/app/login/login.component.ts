import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  usuario: Usuario = new Usuario();

  constructor(
    private authService: AuthService
  ) {
    
  }

  fazerLogin() {
    this.authService.fazerLogin(this.usuario)
  }
}
