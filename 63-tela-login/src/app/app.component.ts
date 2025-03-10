import { Component } from '@angular/core';
import { AuthService } from './login/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cursosQuery = {
    pagina: 1
  }

  mostrarMenu: boolean = false

  constructor(
    private authService: AuthService
  ) {
    this.authService.mostrarMenuEmitter.subscribe(
      mostrarMenu => {
        this.mostrarMenu = mostrarMenu
      }
    )
  }

  sair() {
    this.authService.fazerLogout()
  }
}
