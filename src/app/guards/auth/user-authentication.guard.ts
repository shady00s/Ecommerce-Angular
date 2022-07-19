import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationGuard implements CanActivate {
  constructor(private logInservice: LoginService, private route: Router) {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.logInservice.isLoggedIn) {
      return true
    }
    else {

      alert('need to login')
      this.route.navigate(['/login'])
      return false
    }
  }
}
