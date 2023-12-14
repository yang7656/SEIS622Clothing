import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  
  constructor(private router: Router, private authService: AuthService, private jwtService: JwtHelperService) { }
  
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    const isLoggedIn = this.authService.isLoggedIn();

    if (this.jwtService.isTokenExpired()) {
      console.log(this.jwtService)
      this.router.navigate(['']);
      return false;
    } 
    
    return isLoggedIn;
    
  }

  
}