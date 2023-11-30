import { Component } from '@angular/core';
import { IMenuItem } from '../../models/IMenuItem';
import { AuthGuard } from 'src/app/auth-guard/auth.guard';

@Component({
  selector: 'top-menu', 
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent {
  public menu: IMenuItem = {
    logo: 'assets/images/logo.png',
    searchBox: true,
    userSignIn: true,
    cart: true,
    contact: 'mailto: fashionpolice@seis-622.com'
    };

  constructor(private authService: AuthGuard) { }

    //Takes in a JSON object and maps it to the IMenuItem interface
  public mapMenu(items: any): IMenuItem {
    this.menu.logo = items.logo;
    this.menu.searchBox = items.searchBox;
    this.menu.userSignIn = items.userSignIn;
    this.menu.cart = items.cart;
    this.menu.contact = items.contact;
    return this.menu;
  }

  isAuthenticated(): boolean {
    return <boolean>this.authService.canActivate();
  }
}