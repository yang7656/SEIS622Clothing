import { Component } from '@angular/core';
import { IMenuItem } from '../../models/IMenuItem';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'top-menu', 
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent {


  loggedIn: boolean = false;
  
  public menu: IMenuItem = {
    logo: 'assets/images/logo.png',
    searchBox: true,
    userSignIn: true,
    cart: true,
    contact: 'mailto: fashionpolice@seis-622.com'
    };

  constructor(private authService: AuthService) { }

  ngOnInit() {
    // Subscribe to the isLoggedIn Observable
    this.authService.isLoggedIn().subscribe((loggedIn) => {
      this.loggedIn = loggedIn;
    });
  }

  //Takes in a JSON object and maps it to the IMenuItem interface
  isAuthenticated(): boolean {
    return this.loggedIn;
  }

}