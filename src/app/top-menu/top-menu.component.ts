import { Component, OnInit } from '@angular/core';
import { TopMenuService } from '../shared/top-menu.service';
import { IMenuItem, IDropDownItem } from '../models/menu-item';
import { DataService } from '../shared/data-service.service';

@Component({
  selector: 'top-menu', // <top-menu></top-menu>,
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent {
  static getDataUrl(): any {
    throw new Error('Method not implemented.');
  }
  
  private dataUrl = './assets/data/menu-items.json';
  searchQuery: string = '';

  public menu: IMenuItem = this.mapMenu(DataService.getMenu(this.dataUrl));

  public dropDownMenu: IDropDownItem[] = [{pageName: '', link: ''}];

  constructor(private topMenuService: TopMenuService) { 

  }

  getDataUrl(): string {
    return this.dataUrl;
  }

  onSearchInputChange(): any {
    console.log(this.searchQuery);
    return this.searchQuery;
  }

    dropDownClicked(string: string) {
    //Go to page based on string

  }

  addDropdownItem(pageName: string, link: string) {
    this.dropDownMenu.push({pageName, link});
  }

  mapMenu(items: any): IMenuItem {
    this.menu.logo = items.logo;
    this.menu.searchBox = items.searchBox;
    this.menu.userSignIn = items.userSignIn;
    this.menu.cart = items.cart;
    this.menu.contact = items.contact;
    this.menu.dropdownMenu = items.dropdownMenu;
    for (let i = 0; i < this.menu.dropdownMenu.length; i++) {
      this.addDropdownItem(this.menu.dropdownMenu[i].pageName, this.menu.dropdownMenu[i].link);
    }
    return this.menu;
  }
}