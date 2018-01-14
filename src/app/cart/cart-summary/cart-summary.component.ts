import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';
import { CartItem } from '../cart-item';
import { DoCheck } from '@angular/core/src/metadata/lifecycle_hooks';
import { Product } from '../../product/product';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit,DoCheck {
  
  constructor(private cardService:CardService) { }

  totalCartItem : number;
  totalCartItemPrice: number;
  cartItems:CartItem[];

  ngOnInit() {
    this.cartItems = this.cardService.list();
  }

  ngDoCheck(){
    this.totalCartItem = this.cardService.list().reduce((a,b)=>a+b.quantity,0);
    this.totalCartItemPrice = this.cardService.list().reduce((a,b)=>a+(b.quantity*b.product.unitPrice),0);
  }

  removeFromCart(product:Product){
    this.cardService.removeFromCart(product.productId);
  }

}
