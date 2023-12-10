import { Component  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'menu-search',
  templateUrl: './menu-search.component.html',
  styleUrls: ['./menu-search.component.scss']
})
export class MenuSearchComponent {

  searchQuery: string = '';
  products: any[] = [];
  filteredProducts: string[] = [];
  searchUpdated: Subject<string> = new Subject<string>();


  constructor(private http: HttpClient, private searchService: SearchService) {
    this.fetchProducts();
    this.searchUpdated.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.filteredProducts = this.filterProducts(value);
      console.log(this.filteredProducts)
    });
  }

  fetchProducts(): void {
    this.http.get<any[]>('http://localhost:3000/images').subscribe(
      data => {
        this.products = data;
        this.filteredProducts = data;
      },
      error => {
        console.error('Error fetching products', error);
      }
    );
  }

  // update input search box content
  onSearchInputChange(query: string): void {
    this.searchUpdated.next(query);
  }

  private filterProducts(query: string): string[] {
    if (!query) 
    {
      return this.products;
    }
    
    const filtered = this.products.filter(product =>
      product.toLowerCase().includes(query.toLowerCase())
    );

    this.searchService.updateFilteredProducts(filtered);


    return filtered;
  }


}