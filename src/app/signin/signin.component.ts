import { Component } from '@angular/core';

@Component({
  selector: 'signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})


export class SigninComponent {

  constructor() { }

  public signIn(): string {
    console.log("Sign In");
    return '<signin-page></signin-page>'; //TODO: returns the link to signin-page.html
  }

}
