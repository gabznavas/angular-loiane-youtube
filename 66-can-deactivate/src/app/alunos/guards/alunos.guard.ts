import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

// export const cursosGuard: CanActivateFn = (route, state) => {
//   return true
// };

@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('acessado rotas filhas dos alunos');

    // if(state.url.includes("editar")) {
    //   alert('usuário sem acesso')
    //   return of(false);
    // }

    return true
  }
}
