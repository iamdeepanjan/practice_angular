import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = new BehaviorSubject<any[]>([]);

  getCart(){
    return this.cart.asObservable();
  }

  setCart(products: any[]){
    this.cart.next(products);
  }

  addToCart(product: any){
    const productWithNewId = { ...product, id:Date.now() };
    this.cart.next([...this.cart.value, productWithNewId]);
  }

  removeFromCart(product: any){
    this.cart.next(this.cart.value.filter(item =>item.id !== product.id));
  }

  clearCart(){
    this.cart.next([]);
  }
}
