import { Injectable } from '@angular/core';
import { IMenuItem, IddMenu } from '../models/menu-item';

@Injectable({
  providedIn: 'root'
})
export class TopMenuService {
  updateSearchQuery(searchQuery: string) {
    console.log('Method not implemented.');
  }
  updateMenuItemLabel(index: number, newLabel: string) {
    console.log('Method not implemented.');
  }

  constructor() { }

  getMenu(): IMenuItem {
    return {
      logo: 'assets/images/logo.png',
      dropdownMenu: [
        { title: 'Home', link: 'home' },
        { title: 'About', link: 'about' },
        { title: 'Contact', link: 'contact' }
      ],
      searchBox: true,
      userSignIn: this.userSignedIn(),
      cart: true,
      contact: 'Contact Us'
    }
  }
  userSignedIn(): boolean {
    if (localStorage.getItem('user')) {
      return true;
    }
    return false;
  }
}
