import { Component } from '@angular/core';
import { Product } from '../../models/IProduct';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { AuthService } from '../services/auth.service';
import { ICartItem } from 'src/app/models/ICart';
import { ShoppingCartService } from 'src/app/protected/shopping-cart.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {
  
  product: Product;
  selectedSize: string;
  quantity: number;

  constructor(
    private route: ActivatedRoute, 
    private productsService: ProductsService, 
    private auth: AuthService, 
    private shoppingCartService: ShoppingCartService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const productName = params['productName'];
      this.product = this.productsService.getProductbySerialNumber(productName);
    });
  }

  addToCart(product: Product) {
    
    if (!this.selectedSize) {
      alert("Please select a size");
      return;
    }

    if (!this.quantity) {
      alert("Please select a quantity");
      return;
    }

    if (this.auth.isLoggedIn()) {
      let item: ICartItem = {} as ICartItem;
      item.name = product.name;
      item.color = product.name.split(" ")[0].toLowerCase();
      item.price = product.price;
      item.quantity = this.quantity;
      item.size = this.selectedSize;
      this.shoppingCartService.addToCart(item);
    }
    else {
      alert("Please login first!");
      return;
    }
  }
}
