import { Injectable,Inject } from '@angular/core';
import { Product } from "./product";
import {Http,Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'
import 'rxjs/add/operator/catch'

@Injectable()
export class ProductService {

  constructor(private http:Http,@Inject('apiUrl') private apiUrl) { }

  getProducts(seoUrl:String):Observable<Product[]>{
    if(seoUrl){
      return this.http.get(this.apiUrl + "/products/" +seoUrl)
        .map((res: Response) => res.json());
    }else{
      return this.http.get(this.apiUrl + "/products")
      .map((res: Response) => res.json());
    }
    
  }
}
