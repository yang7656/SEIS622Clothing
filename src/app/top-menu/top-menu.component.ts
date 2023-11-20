import { Component, OnInit } from '@angular/core';
import { TopMenuService } from '../shared/top-menu.service';
import { IMenuItem, IDropDownItem } from '../models/menu-item';
import { DataService } from '../shared/data-service.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'top-menu', // <top-menu></top-menu>,
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  
  private dataUrl = 'src/assets/data/menu-items.json';
  public menuArray: any[] = DataService.getData(this.dataUrl);
  searchQuery: string = '';

  public menu: IMenuItem = {
    logo: '',
    dropdownMenu: [],
    searchBox: false,
    userSignIn: false,
    cart: false,
    contact: ''
  };

  mapMenu(menu: any) {
    for (let index = 0; index++; index<this.menuArray.length) {
      let key = this.menuArray[index].key;
      if (key === 'logo') {
        this.menu.logo = key.map((item: any) => {
          return {
            logo: item.logo
          }
        });
      } else if (key === 'dropdownMenu') {
        this.menu.dropdownMenu = key.map((item: any) => {
          return {
            label: item.label,
            link: item.link
          }
        });
      } else if (key === 'searchBox') {
        this.menu.searchBox = key.map((item: any) => {
          return {
            searchBox: item.searchBox
          }
        });        
      } else if (key === 'userSignIn') {
        this.menu.userSignIn = key.map((item: any) => {
          return {
            userSignIn: item.userSignIn
          }
        });        
      } else if (key === 'cart') {
        this.menu.cart = key.map((item: any) => {
          return {
            cart: item.cart
          }
        });        
      } else if (key === 'contact') {
        this.menu.contact = key.map((item: any) => {
          return {
            contact: item.contact
          }
        });        
      } else {
        alert("Error: menu key not found");
      }
    };
  }

  constructor(private topMenuService: TopMenuService) { 

  }

  onSearchInputChange(): void {
    this.topMenuService.updateSearchQuery(this.searchQuery);
  }

  ngOnInit() {
    this.menuArray = DataService.getMenu(this.dataUrl);
  }

  placeHolder(string: string) {
    alert("This is a placeholder");
  }

  addDropdownItem(label: string, link: string) {
    //this.ddMenu.push({label, link});
  }
}