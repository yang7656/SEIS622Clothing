import { LOCALSTORAGE_TOKEN_KEY } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from '../models/IPublic';

export const fakeLoginResponse: LoginResponse = {
  //TODO: Implement a 'backend' that returns a real token
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
  refreshToken: {
    userId: 95018132,
    token: 'fakeRefreshToken',
    refreshCount: 2,
    expiryDate: new Date(),
  },
  tokenType: 'JWT'
}

export const fakeRegisterResponse: RegisterResponse = {
  status: 200,
  message: 'Registration sucessfull.'
}


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private snackbar: MatSnackBar,
    private jwtService: JwtHelperService
  ) { }

/*  Due to the '/api' the url will be rewritten by the proxy, e.g. to http://localhost:8080/api/auth/login
    this is specified in the src/proxy.conf.json. The proxy.conf.json listens for /api and changes the target. 
    You can also change this in the proxy.conf.json */

  //The of() can be removed with a backend
  login(loginRequest: LoginRequest): Observable<LoginResponse> {
    return of(fakeLoginResponse).pipe(
      tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)),
      tap(() => this.snackbar.open('Login Successfull', 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      }))
    );
    // return this.http.post<LoginResponse>('/api/auth/login', loginRequest).pipe(
    // tap((res: LoginResponse) => localStorage.setItem(LOCALSTORAGE_TOKEN_KEY, res.accessToken)),
    // tap(() => this.snackbar.open('Login Successfull', 'Close', {
    //  duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    // }))
    // );
  }

  //The of() can be removed with a backend
  register(registerRequest: RegisterRequest): Observable<RegisterResponse> {
    return of(fakeRegisterResponse).pipe(
      tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
        duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
      })),
    );
    // return this.http.post<RegisterResponse>('/api/auth/register', registerRequest).pipe(
    // tap((res: RegisterResponse) => this.snackbar.open(`User created successfully`, 'Close', {
    //  duration: 2000, horizontalPosition: 'right', verticalPosition: 'top'
    // }))
    // )
  }

  //Get the user fromt the token payload
  getLoggedInUser() {
    const decodedToken = this.jwtService.decodeToken();
    return decodedToken.user;
  }
}