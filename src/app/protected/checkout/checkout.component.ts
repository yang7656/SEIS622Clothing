import { Component, OnInit } from '@angular/core';
import { ICartItem } from '../../models/ICart';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  cartItems: ICartItem[] = [];

  constructor(private shoppingCartService: ShoppingCartService) {}

  // Get the items in the shopping cart
  ngOnInit(): void {
    this.shoppingCartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }
}
