import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  
  constructor(private route:Router) {
   
    
  }

  settoken(token:string){
    localStorage.setItem('token',token);
  }
  login():string|null{
    return localStorage.getItem('token');
  }
  logout():any{
    localStorage.removeItem('token');
  }
  isLoggedIn():boolean{
    return !!this.login();
  }

  reloadCurrentRouteTransaction() {
  
    this.route.navigateByUrl('/', {skipLocationChange: true}).then(() => {
        this.route.navigateByUrl('/');
    });
}
}
