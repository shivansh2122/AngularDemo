import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { BackendServiceService } from './backend-service.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService implements CanActivate {
   constructor(private service:BackendServiceService,private router:Router) {}
  
    canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot) {
      
        if(this.service.isUserLoggedIn()){
          return true
        }
        else{
          this.router.navigate(["login"]);
          return false;
        }
    }
  }
