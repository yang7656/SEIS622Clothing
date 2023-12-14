import { Component } from '@angular/core';
import { ImageService } from '../../../../node-rest-api/serve';
import { OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sharedshop',
  templateUrl: './sharedshop.component.html',
  styleUrl: './sharedshop.component.scss'
})
export class SharedshopComponent implements OnInit {

  title = "SEIS-622 Northern Streetwear - From the Woods to the Pavement";
  products: string[] = [];
  searchItems: string[] = [];
  isSearch: boolean = false;


  constructor(private imageService: ImageService, private searchService: SearchService, private router: Router) {}
  
  ngOnInit(): void 
  {
    this.imageService.getImages().subscribe((data: any) => {
      this.products = data;
    });

    this.searchService.isSearch.subscribe(active => {
      this.isSearch = active;
    });
    
    this.searchService.filteredProducts.subscribe(
      filteredProducts => {
        this.searchItems = filteredProducts;
      }
    );
  }

  onImageClick(product: any) {
    this.router.navigate(['/product', product]);
  }
}
