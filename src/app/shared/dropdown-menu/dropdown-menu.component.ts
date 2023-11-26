import { Component } from '@angular/core';
import { IDropDownItem } from '../../models/IMenuItem';

@Component({
  selector: 'dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent {

  constructor() { }

  public isDropDownOpen: boolean = false;

  public dropDownMenu: IDropDownItem[] = [{"pageName": "TShirts", "link": "/tshirts"},
  {"pageName": "Hoodies", "link": "/hoodies"},
  {"pageName": "Tank Tops", "link": "/tanktops"},
  {"pageName": "Jackets", "link": "/jackets"}];

  //Takes in a JSON object and maps it to the IDropDownItem interface
  public mapDropDown(items: any): IDropDownItem[] {
    for (let i = 0; i < items.length; i++) {
      this.addDropdownItem(items[i].pageName, items[i].link);
    }
    return this.dropDownMenu;
  }

  //Adds a dropdown item to the dropdown menu
  private addDropdownItem(pageName: string, link: string) {
    this.dropDownMenu.push({ pageName, link });
  }
}
