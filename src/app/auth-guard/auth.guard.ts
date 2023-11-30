import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private router: Router,
    private jwtService: JwtHelperService
  ) { }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.jwtService.isTokenExpired()) {
      this.router.navigate(['']);
      return false;
    } else {
      return true;
    }
  }
}