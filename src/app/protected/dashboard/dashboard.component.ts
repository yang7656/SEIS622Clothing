import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { LOCALSTORAGE_TOKEN_KEY } from 'src/app/app.module';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {


  constructor(private router: Router, private auth: AuthService) {}

  logout() {
    // Removes the jwt token from the local storage, so the user gets logged out & then navigate back to the "public" routes
    localStorage.removeItem(LOCALSTORAGE_TOKEN_KEY);
    this.auth.logout();
    this.router.navigate(['/']);
  }

  checkout() {
    this.router.navigate(['/protected/checkout']);
  }

  myAccount() {
    this.router.navigate(['/protected/myaccount']);
  }

  myCart() {
    this.router.navigate(['/protected/cart']);
  }

  continueShopping() {
    this.router.navigate(['/protected/shopping']);
  }


}