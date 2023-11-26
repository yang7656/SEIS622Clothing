import { Component } from '@angular/core';

@Component({
  selector: 'menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.scss']
})
export class MenuSearchComponent {

  constructor() { }

  public searchQuery: string = "";

  //Called when the search box is clicked
  onSearchInputChange(searchQuery: string): any {
    console.log(searchQuery);
    return searchQuery;
  }
}