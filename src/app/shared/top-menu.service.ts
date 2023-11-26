import { Injectable } from '@angular/core';
import { IMenuItem, IDropDownItem } from '../models/IMenuItem';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { OnInit } from '@angular/core';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';

@Injectable({
  providedIn: 'root'
})

export class TopMenuService implements OnInit {
  private topMenuComponent: TopMenuComponent = new TopMenuComponent();
  private dropDownMenuComponent: DropdownMenuComponent = new DropdownMenuComponent();
  private menuUrl = 'assets/data/menu-items.json';
  public menu: IMenuItem = this.topMenuComponent.menu;
  public dropDownMenu: IDropDownItem[] = this.dropDownMenuComponent.dropDownMenu;

  constructor() { }

  //Periodically checks for changes in the menu
  ngOnInit(): void {
    setInterval(() => {
      this.menu = this.getMenu(this.menuUrl);
    }, 1000);
  }

  //Uses the data service to get the menu from the JSON file
  public getMenu(menuUrl: string): IMenuItem {
    this.topMenuComponent.mapMenu(this.menuUrl);
    return this.menu;
  }
}