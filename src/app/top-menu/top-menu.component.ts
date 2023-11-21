import { Component, OnInit } from '@angular/core';
import { TopMenuService } from '../shared/top-menu.service';
import { IMenuItem, IDropDownItem } from '../models/menu-item';
import { DataService } from '../shared/data-service.service';

@Component({
  selector: 'top-menu', // <top-menu></top-menu>,
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})

export class TopMenuComponent implements OnInit {
  
  private dataUrl = './assets/data/menu-items.json';
  searchQuery: string = '';

  public menu: IMenuItem = this.mapMenu(DataService.getMenu(this.dataUrl));

  public dropDownMenu: IDropDownItem[] = [{pageName: '', link: ''}];

  constructor(private topMenuService: TopMenuService, private dataService: DataService) { 
    
  }

  onSearchInputChange(): void {
    this.topMenuService.updateSearchQuery(this.searchQuery);
  }

  ngOnInit(): void {
    this.mapMenu(DataService.getMenu(this.dataUrl));
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