import { Component } from '@angular/core';
import { ImageService } from '../../../../node-rest-api/serve';
import { OnInit } from '@angular/core';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'sharedshop',
  templateUrl: './sharedshop.component.html',
  styleUrl: './sharedshop.component.scss'
})
export class SharedshopComponent implements OnInit{

  title = "SEIS-622 Northern Streetwear - From the Woods to the Pavement";
  products: string[] = [];
  searchItems: string[] = [];
  isSearch: boolean = false;


  constructor(private imageService: ImageService, private searchService: SearchService) {}
  
  ngOnInit(): void 
  {
    this.imageService.getImages().subscribe((data: any) => {
      this.products = data;
    });

    this.searchService.isSearch.subscribe(active => {
      this.isSearch = active;
      console.log("Is searching: " + this.isSearch)
    });
    
    this.searchService.filteredProducts.subscribe(
      filteredProducts => {
        this.searchItems = filteredProducts;
      }
    );
  }
}
