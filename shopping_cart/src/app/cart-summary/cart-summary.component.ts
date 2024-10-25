import { Component, inject, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent implements OnInit {

  totalPrice: any;
  totalItems: any;

  private cartService = inject(CartService);

  ngOnInit(): void {
    this.cartService.getCart().subscribe(data => {
      this.totalItems = data.length;
      this.totalPrice = data.reduce((total, item) => total + item.price, 0);
    });
  }

  checkout() {
    this.cartService.clearCart();
    alert('Thank you for your purchase!');
  }
}
