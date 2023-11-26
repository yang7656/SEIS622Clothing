import { LOCALSTORAGE_TOKEN_KEY } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../models/IPublic';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private snackbar: MatSnackBar, private jwtService: JwtHelperService) { }

  //Login a user
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>('/login', loginRequest).pipe(
    tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)),
    tap(() => this.snackbar.open('Login successful', 'Close', {
     duration: 1000, horizontalPosition: 'right', verticalPosition: 'top'
    }))
    );
  }

  //Logout a user
  logout() {
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.snackbar.open('Logout successful', 'Close', {
     duration: 1000, horizontalPosition: 'right', verticalPosition: 'top'
    });
  }

  //Check if a user is logged in
  isLoggedIn() {
    return !!localStorage.getItem(LOCALSTORAGE_TOKEN_KEY);
  }

  //Register a new user
  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return this.http.post<RegisterResponse>('/register', registerRequest).pipe(
    tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
     duration: 1000, horizontalPosition: 'right', verticalPosition: 'top'
    }))
    )
  }

  //Get the user from the token payload
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}