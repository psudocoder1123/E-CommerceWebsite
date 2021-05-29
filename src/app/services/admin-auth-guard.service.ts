import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService  implements CanActivate{

  data: any

  constructor(private loginService : LoginService, private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> 
  {
    this.data= this.loginService.getUserDataFromLocalStorage()
    if(this.data.roles == "ROLE_ADMIN")
    {
          return true;
    }
   else
     {
      this.router.navigate(['/']);
      return false 
     }
     
  }

  
}
