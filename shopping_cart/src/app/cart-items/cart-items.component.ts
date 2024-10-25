import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-items',
  standalone: true,
  imports: [],
  templateUrl: './cart-items.component.html',
  styleUrl: './cart-items.component.css'
})
export class CartItemsComponent implements OnInit {
  
  private cartService = inject(CartService);
  
  cartItems: any[] = [];
  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => this.cartItems = data);
  }
  removeFromCart(item: any) {
    this.cartService.removeFromCart(item);
  }

}
