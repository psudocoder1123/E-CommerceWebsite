import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private loginService : LoginService, private router : Router) { }
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
  {

    if(this.loginService.IsLogin())
    {
      return true
    }

    //Extracting the pass navigation address and sending it as a query string during login
    this.router.navigate(['/login'], { queryParams: {returnUrl: state.url }} );
    return false

    // parameter is extracted in Login component and stored in Local Storage
  }
}
