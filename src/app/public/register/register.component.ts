import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import { CustomValidators } from '../validator';
import { AuthService } from '../../shared/services/auth.service';
import { tap } from 'rxjs';
import { Router } from '@angular/router';
import { RegisterRequest } from 'src/app/models/IPublic';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    username: new FormControl(null, [Validators.required]),
    firstname: new FormControl(null, [Validators.required]),
    lastname: new FormControl(null, [Validators.required]),
    street_add: new FormControl(null, [Validators.required]),
    street_add_2: new FormControl(null),
    city: new FormControl(null, [Validators.required]),
    state: new FormControl(null, [Validators.required]),
    zipcode: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    passwordConfirm: new FormControl(null, [Validators.required])
  },
    // add custom Validators to the form, to make sure that password and passwordConfirm are equal
    { validators: CustomValidators.passwordsMatching }
  )

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  // convert the form to a RegisterRequest object
  convertRegister(register: FormGroup): RegisterRequest {
    return {
      email: register.value.email,
      username: register.value.username,
      firstname: register.value.firstname,
      lastname: register.value.lastname,
      street_add: register.value.street_add,
      street_add_2: register.value.street_add_2,
      city: register.value.city,
      state: register.value.state,
      zipcode: register.value.zipcode,
      phone: register.value.phone,
      password: register.value.password
    };
  }

  register() {
    if (!this.registerForm.valid) {
      return;
    }
    this.authService.register(this.convertRegister(this.registerForm)).pipe(
      // If registration success, navigate to login route
      tap(() => this.router.navigate(['../login']))).subscribe();
  }
}