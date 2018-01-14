import { Component, OnInit } from '@angular/core';
import { Product } from "./product"
import { ProductService } from './product.service';
import { NotificationsService } from 'angular2-notifications';
import { CardService } from '../cart/card.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {

  products: Product[];
  
  constructor(private productService: ProductService,
              private notificationService:NotificationsService,
              private cardService:CardService,
              private activetedRoute:ActivatedRoute) {

  }

  ngOnInit() {
    this.activetedRoute.params.subscribe(params=>{
      this.getProducts(params["seoUrl"]);
    });
  }

  getProducts(seoCategory:String){
    this.productService.getProducts(seoCategory).subscribe((products: Product[]) => this.products = products);
  }

  addToCart(product:Product){
    this.notificationService.success("Success",product.productName + " added to Cart");
    this.cardService.addToCart(product);
  }

}
