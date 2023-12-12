import { Component } from '@angular/core';
import { ICartItem } from '../../models/ICart';
import { ShoppingCartService } from '../shopping-cart.service';
import { OnInit } from '@angular/core';

@Component({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {

    constructor(private shoppingCartService: ShoppingCartService) { }
    public cartItems: ICartItem[] = [];

    // Get the items in the shopping cart
    ngOnInit(): void {
        this.shoppingCartService.cartItems$.subscribe(items => {
            this.cartItems = items;
        });
    }

    // Calculate the total price of items in the shopping cart
    calculateTotalPrice(): number {
        return this.cartItems.reduce((total: number, item) => total + item.price * item.quantity, 0);
    }

    // Remove an item from the shopping cart
    removeItem(item: any): void {
        const index = this.cartItems.indexOf(item);
        if (index !== -1) {
            this.cartItems.splice(index, 1);
        }
    }
}