import { Component, inject } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-items',
  standalone: true,
  imports: [],
  templateUrl: './product-items.component.html',
  styleUrl: './product-items.component.css'
})
export class ProductItemsComponent {

  private cartService = inject(CartService);

  products: any = [
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 200 }, 
    { id: 3, name: 'Product 3', price: 300 }
  ];
  
  addToCart(product: any) {
    this.cartService.addToCart(product);
  }
}
