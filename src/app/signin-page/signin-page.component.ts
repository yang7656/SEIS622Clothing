import { Component } from '@angular/core';

@Component({
  selector: 'signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})

export class SigninPageComponent {

  constructor() { }

  public signIn(): string {
    console.log("Sign In");
    return ''; //TODO: returns the link to signin-page.html
  }

}
