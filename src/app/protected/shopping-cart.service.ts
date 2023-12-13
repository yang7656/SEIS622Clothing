// shopping-cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from '../models/ICart';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  
  private cartItemsSubject: BehaviorSubject<ICartItem[]> = new BehaviorSubject<ICartItem[]>([]);
  cartItems$: Observable<ICartItem[]> = this.cartItemsSubject.asObservable();

  constructor() {}

  getCartItems(): ICartItem[] {
    return this.cartItemsSubject.value;
  }

  addToCart(item: ICartItem): void {

    const currentCartItems = this.cartItemsSubject.value;

    // if item already exists in the cart, update the quantity
    const index = currentCartItems.findIndex(_item => _item.name === item.name && _item.size === item.size);

    if (index !== -1) {
      currentCartItems[index].quantity += item.quantity;
      this.cartItemsSubject.next([...currentCartItems]);
    }
    else {
      this.cartItemsSubject.next([...currentCartItems, item]);
    }

  }
}
