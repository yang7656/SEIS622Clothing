import { Injectable } from '@angular/core';
import { IMenuItem, IDropDownItem } from '../models/IMenuItem';
import { DataService } from './data-service.service';
import { TopMenuComponent } from '../public/top-menu/top-menu.component';
import { OnInit } from '@angular/core';
import { DropdownMenuComponent } from '../public/dropdown-menu/dropdown-menu.component';

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
    //Refreshes the Top Menu
    let jsonMenu = DataService.getData(this.menuUrl).subscribe(data => {
      this.menu = this.topMenuComponent.mapMenu(data);
    });
    //Refreshes the Dropdown Menu
    let jsonDropDownMenu = DataService.getData(this.menuUrl).subscribe(data => {
      this.dropDownMenu = this.dropDownMenuComponent.mapDropDown(data);
    });
  }

  //Uses the data service to get the menu from the JSON file
  public getMenu(menuUrl: string): IMenuItem {
    let jsonMenu = DataService.getData(menuUrl);
    return this.topMenuComponent.mapMenu(jsonMenu);
  }
}