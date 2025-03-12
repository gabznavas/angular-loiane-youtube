import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot
} from '@angular/router';
import { AlunosFormComponent } from '../alunos-form/alunos-form.component';
import { Observable } from 'rxjs';
import { IFormCanDeactivate } from './iform-candeactivate.guard';

// export const alunosDeactivateGuard: CanActivateFn = (route, state) => {
//   return true;
// };

@Injectable()
export class AlunosDeactivateGuard
  implements CanDeactivate<IFormCanDeactivate> {
  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    return component.podeDesativar()
  }
}