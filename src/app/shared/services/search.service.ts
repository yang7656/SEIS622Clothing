import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private filteredProductsSource = new BehaviorSubject<string[]>([]);
  filteredProducts = this.filteredProductsSource.asObservable();

  constructor() { }

  updateFilteredProducts(products: string[]) {
    this.filteredProductsSource.next(products);
  }
}
