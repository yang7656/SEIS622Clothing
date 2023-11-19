import { Component, OnInit } from '@angular/core';
import { TopMenuService } from '../shared/top-menu.service';
import { IMenuItem } from '../models/menu-item';

@Component({
  selector: 'top-menu', // <top-menu></top-menu>,
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent implements OnInit {
  menu!: IMenuItem;
  public ddMenu = ["TShirts", "TankTops", "Hoodies", "Jackets"];

  constructor(private topMenuService: TopMenuService) { }

  searchQuery: string = '';

  onSearchInputChange(): void {
    this.topMenuService.updateSearchQuery(this.searchQuery);
  }

  ngOnInit() {
    this.menu = this.topMenuService.getMenu();
  }

  updateItemLabel(index: number, newLabel: string): void {
    this.topMenuService.updateMenuItemLabel(index, newLabel);
    // Refresh the menu or perform additional actions if needed
    this.menu = this.topMenuService.getMenu();
  }
  placeHolder(string: string) {
    alert("This is a placeholder");
  }
}