import { LOCALSTORAGE_TOKEN_KEY } from '../../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../../models/IPublic';
import { NotificationService } from './notification.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private notificationService: NotificationService, private jwtService: JwtHelperService, private router: Router) { }

  // Login a user
  login(loginRequest: LoginRequest): Observable<LoginResponse> {

    return this.http.post<LoginResponse>('http://localhost:8000/login', loginRequest).pipe(
      tap((res: LoginResponse) => {
        localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken);
        //this.notificationService.showSuccess('Login successful');
        this.loggedIn.next(true);
        console.log(this.getLoggedInUser())
      })
    );

  }

  // Logout a user
  logout() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    //this.notificationService.showSuccess('Logout successful');
    this.loggedIn.next(false);
  }

  // Check if a user is logged in
  isLoggedIn() : Observable<boolean> {
    //console.log(!!localStorage.getItem(LOCALSTORAGE_TOKEN_KEY));
    return this.loggedIn.asObservable();
    //return !!localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  }

  // Register a new user
  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('http://localhost:8000/register', registerRequest).pipe(
      tap(() => this.notificationService.showSuccess('User created successfully'))
    );
  }

  // Get the user from the token payload
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}
