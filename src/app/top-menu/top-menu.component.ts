import { Component } from '@angular/core';
import { TopMenuService } from '../shared/top-menu.service';
import { IMenuItem, IDropDownItem } from '../models/IMenuItem';

@Component({
  selector: 'top-menu', 
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent {
  searchQuery: string = '';
  public dropDownMenu: IDropDownItem[] = [{pageName: '', link: ''}];
  public menu: IMenuItem = {
    logo: 'assets/images/logo.png',
    dropdownMenu: [
      {
        pageName: "TShirts",
        link: "/tshirts"
      },
      {
        pageName: "Hoodies",
        link: "/hoodies"
      },
      {
        pageName: "Tank Tops",
        link: "/tanktops"
      },
      {
        pageName: "Jackets",
        link: "/jackets"
      }
    ],
    searchBox: true,
    userSignIn: true,
    cart: true,
    contact: 'mailto: fashionpolice@seis-622.com'
/*     logo: '',
    searchBox: false,
    userSignIn: false,
    cart: false,
    contact: '',
    dropdownMenu: this.dropDownMenu  */ 
  };

  constructor() { }

    //Takes in a JSON object and maps it to the IMenuItem interface
  public mapMenu(items: any): IMenuItem {
    this.menu.logo = items.logo;
    for (let i = 0; i < this.menu.dropdownMenu.length; i++) {
      this.addDropdownItem(this.menu.dropdownMenu[i].pageName, this.menu.dropdownMenu[i].link);
    }
    this.menu.searchBox = items.searchBox;
    this.menu.userSignIn = items.userSignIn;
    this.menu.cart = items.cart;
    this.menu.contact = items.contact;

    return this.menu;
  }

  //Adds a dropdown item to the dropdown menu
  private addDropdownItem(pageName: string, link: string) {
    this.dropDownMenu.push({pageName, link});
  }

  //Called when the search box is clicked
  onSearchInputChange(searchQuery: string): any {
    console.log(searchQuery);
    return searchQuery;
  }

  //Called when a dropdown item is clicked
  dropDownClicked(string: string) {
    //Yet to be implemented: redirect to the page
  }
}