import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private filteredProductsSource = new BehaviorSubject<string[]>([]);
  filteredProducts = this.filteredProductsSource.asObservable();

  private isSearchActiveSource = new BehaviorSubject<boolean>(false);
  isSearch = this.isSearchActiveSource.asObservable();

  constructor() { }

  updateFilteredProducts(products: string[]) {
    this.filteredProductsSource.next(products);
  }

  updateIsSearch(isActive: boolean) {
    this.isSearchActiveSource.next(isActive);
  }
}
