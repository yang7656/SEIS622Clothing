import { Component } from '@angular/core';
import { TopMenuService } from '../shared/top-menu.service';
import { IMenuItem, IDropDownItem } from '../models/IMenuItem';

@Component({
  selector: 'top-menu', // <top-menu></top-menu>,
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent {
  public topMenuService: TopMenuService = new TopMenuService();
  searchQuery: string = '';
  public dropDownMenu: IDropDownItem[] = [{pageName: '', link: ''}];
  public menu: IMenuItem = this.topMenuService.getMenu('./assets/data/menu-items.json');

  constructor() { }

  onSearchInputChange(): any {
    console.log(this.searchQuery);
    return this.searchQuery;
  }

  dropDownClicked(string: string) {
    //Go to page based on string

  }

  private addDropdownItem(pageName: string, link: string) {
    this.dropDownMenu.push({pageName, link});
  }

  public mapMenu(items: any): IMenuItem {
    this.menu.logo = items.logo;
    this.menu.searchBox = items.searchBox;
    this.menu.userSignIn = items.userSignIn;
    this.menu.cart = items.cart;
    this.menu.contact = items.contact;
    for (let i = 0; i < this.menu.dropdownMenu.length; i++) {
      this.addDropdownItem(this.menu.dropdownMenu[i].pageName, this.menu.dropdownMenu[i].link);
    }
    return this.menu;
  }
}