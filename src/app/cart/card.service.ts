import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { CartItem } from './cart-item';
import { CART_ITEM_LIST } from './cart-item-list';

@Injectable()
export class CardService {
  cartItems:CartItem[];

  constructor() { }

  addToCart(product:Product){
    var addedCart = CART_ITEM_LIST.find(cartItem => cartItem.product.productId == product.productId);
    if (addedCart){
      addedCart.quantity += 1;
    }else{
      let cartItem = new CartItem;
      cartItem.quantity = 1;
      cartItem.product = product;
      CART_ITEM_LIST.push(cartItem);
    }
  }

  list():CartItem[]{
    return CART_ITEM_LIST;
  }

  clear(){
    CART_ITEM_LIST.splice(0,CART_ITEM_LIST.length);
  }
  
  removeFromCart(productId:number){
    var addedCart = CART_ITEM_LIST.find(cartItem => cartItem.product.productId == productId);
    var indexOfCartItem = CART_ITEM_LIST.indexOf(addedCart);
    if(indexOfCartItem !=-1){
      if(CART_ITEM_LIST[indexOfCartItem].quantity > 1){
        CART_ITEM_LIST[indexOfCartItem].quantity = CART_ITEM_LIST[indexOfCartItem].quantity -1;
      }else {
        CART_ITEM_LIST.splice(indexOfCartItem,1);
      }
    }
  }
}
