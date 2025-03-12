import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth.service';

// export const authGuard: CanActivateFn = (
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ): Observable<boolean> | boolean => {
//   const router = inject(Router)
//   const authService = inject(AuthService)
//   const canLogin = authService.usuarioAutenticado()
//   if(!canLogin) {
//     router.navigate(['/login'])
//   }
//   return canLogin 
// };


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
  const canLogin = this.authService.usuarioAutenticado()
  if(!canLogin) {
    this.router.navigate(['/login'])
  }
  return canLogin 
  }
}