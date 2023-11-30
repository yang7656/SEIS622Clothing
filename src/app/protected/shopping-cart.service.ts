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
    this.cartItemsSubject.next([...currentCartItems, item]);
  }
}
