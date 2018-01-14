import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item';
import { Product } from '../product/product';
import { CardService } from './card.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cardService: CardService) { }

  cartItems: CartItem[];

  ngOnInit() {
    this.getCartItems();
  }

  getCartItems() {
    this.cartItems = this.cardService.list();
  }

  removeFromCart(product: Product) {
    this.cardService.removeFromCart(product.productId);
  }

}
