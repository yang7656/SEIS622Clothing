import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServe {
  private apiUrl = 'http://localhost:8000/api/';

  constructor(private http: HttpClient) { }

  // Get a user by ID
  getUser(id: string): Observable<any> {
    return this.http.get(this.apiUrl + 'users/' + id);
  }

  // Add a new user
  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl + 'users', user);
  }

  // Update a user
  updateUser(id: string, user: any): Observable<any> {
    return this.http.put(this.apiUrl + 'users/' + id, user);
  }

  // Login a user
  loginUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl + 'public/login', user);
  }

  // Register a user
  registerUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl + 'public/register', user);
  }

  // Change password
  changePassword(id: string, user: any): Observable<any> {
    return this.http.put(this.apiUrl + 'users/' + id + '/password', user);
  }
  
}