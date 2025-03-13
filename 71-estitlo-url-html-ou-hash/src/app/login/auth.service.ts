import { EventEmitter, Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private usuarioAuthenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter<boolean>();

  constructor(
    private router:Router
  ) { }

  fazerLogin(usuario: Usuario) {
    console.log(usuario);
    if (usuario.nome === 'usuario@email.com' &&
      usuario.senha === '123456'
    ) {
      this.usuarioAuthenticado = true

      // quero mostrar o menu
      this.mostrarMenuEmitter.emit(true)

      this.router.navigate(['/'])
    } else {
      // não quero mostrar o menu
      this.mostrarMenuEmitter.emit(false)
      this.usuarioAuthenticado = false
    }
  }

  fazerLogout() {
    this.usuarioAuthenticado = false

    // não quero mostrar o menu
    this.mostrarMenuEmitter.emit(false)

    this.router.navigate(['/login'])
  }

  usuarioAutenticado(): boolean {
    return this.usuarioAuthenticado
  }
}
