import { Injectable } from '@angular/core';
import { IMenuItem, IDropDownItem } from '../models/menu-item';
import { DataService } from './data-service.service';

@Injectable({
  providedIn: 'root'
})
export class TopMenuService {
  updateSearchQuery(searchQuery: string) {
    console.log('Method not implemented.');
  }
  updateMenuItemLabel(index: number, newLabel: string) {
    console.log('Method not implemented.');
  }

  constructor() {

  }
}