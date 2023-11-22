import { Injectable } from '@angular/core';
import { IMenuItem, IDropDownItem } from '../models/IMenuItem';
import { DataService } from './data-service.service';
import { TopMenuComponent } from '../top-menu/top-menu.component';
import { OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TopMenuService implements OnInit{
  private topMenuComponent: TopMenuComponent = new TopMenuComponent();
  private menuUrl = './assets/data/menu-items.json';
  public menu: IMenuItem = {
    logo: '',
    searchBox: false,
    userSignIn: false,
    cart: false,
    contact: '',
    dropdownMenu: []
  };

  updateSearchQuery(searchQuery: string) {
    console.log('Method not implemented.');
  }
  updateMenuItemLabel(index: number, newLabel: string) {
    console.log('Method not implemented.');
  }

  constructor() {

  }

  ngOnInit(): void {
    let jsonMenu = DataService.getData(this.menuUrl).subscribe(data => {
      this.menu = this.topMenuComponent.mapMenu(data);
    });
  }

  public getMenu(menuUrl: string): IMenuItem {
    let jsonMenu = DataService.getData(menuUrl);
      return this.topMenuComponent.mapMenu(jsonMenu);
    }
}