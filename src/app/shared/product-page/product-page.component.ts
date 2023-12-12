import { Component } from '@angular/core';
import { Product } from '../../models/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  
  product: Product;

  constructor(private route: ActivatedRoute, private productsService:ProductsService) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productName = params['productName'];
      console.log("Product Name: " + productName);
      this.product = this.productsService.getProductbySerialNumber(productName);
    });
  }
}
