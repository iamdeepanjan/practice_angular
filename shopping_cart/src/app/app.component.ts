import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItemsComponent } from "./product-items/product-items.component";
import { CartItemsComponent } from './cart-items/cart-items.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductItemsComponent, ProductItemsComponent, CartItemsComponent, CartSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shopping_cart';
}
