import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, CanLoad, GuardResult, MaybeAsync, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
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
export class AuthGuard implements CanActivate, CanLoad {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    console.log('Auth Guard called');
    return this.usuarioEstaAutenticado()
  }

  // pode ou nao carregar o código, mesmo sem permissão
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | boolean {
    console.log('Canload verificando pode carregar o código do módulo');
    return this.usuarioEstaAutenticado()
  }

  private usuarioEstaAutenticado(): boolean {
    const canLogin = this.authService.usuarioAutenticado()
    if (!canLogin) {
      this.router.navigate(['/login'])
    }
    return canLogin
  }
}