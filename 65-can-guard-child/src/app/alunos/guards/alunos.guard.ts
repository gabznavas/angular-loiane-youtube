import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

// export const cursosGuard: CanActivateFn = (route, state) => {
//   return true
// };

@Injectable()
export class AlunosGuard implements CanActivateChild {
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
    console.log('acessado rotas filhas dos alunos');
    return true
  }
}
