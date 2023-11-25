import { Component } from '@angular/core';
import { IMenuItem, IDropDownItem } from '../models/IMenuItem';

@Component({
  selector: 'top-menu', 
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent {
  searchQuery: string = '';
  public menu: IMenuItem = {
    logo: 'assets/images/logo.png',
    searchBox: true,
    userSignIn: true,
    cart: true,
    contact: 'mailto: fashionpolice@seis-622.com'
    };

  constructor() { }

    //Takes in a JSON object and maps it to the IMenuItem interface
  public mapMenu(items: any): IMenuItem {
    this.menu.logo = items.logo;
    this.menu.searchBox = items.searchBox;
    this.menu.userSignIn = items.userSignIn;
    this.menu.cart = items.cart;
    this.menu.contact = items.contact;
    return this.menu;
  }

  //Called when the search box is clicked
  onSearchInputChange(searchQuery: string): any {
    console.log(searchQuery);
    return searchQuery;
  }
}