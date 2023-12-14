import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  correctInput: boolean = true;

  constructor(private authService: AuthService, private router: Router) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    
    /** 
     * Michael original code for navigate after correct login
     * 
    this.authService.login(this.loginForm.value).pipe(
      // route to protected/dashboard, if login was successful
      tap(() => this.router.navigate(['../../protected/dashboard']))
    ).subscribe();
    */
    
    // red sentence "Incorrect email or password" will show up if an incorrect email or password was entered
    this.authService.login(this.loginForm.value).subscribe({
      next: () => {
        this.router.navigate(['protected/']);
      },
      error: (err) => {
        console.error('Login error:', err);
        this.correctInput = false;
      }
    });

  }

}