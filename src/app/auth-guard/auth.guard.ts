import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  

  constructor(
    private router: Router,
    private jwtService: JwtHelperService,
    private authService: AuthService
  ) { }  

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    /*
    if (this.jwtService.isTokenExpired()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
    */
    const isLoggedIn = this.authService.isLoggedIn();
    console.log('AuthGuard#canActivate called, isLoggedIn:', isLoggedIn);
    return isLoggedIn;
  }

  
}