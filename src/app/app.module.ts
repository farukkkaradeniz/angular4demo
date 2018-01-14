import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes,RouterModule} from '@angular/router';

import { SimpleNotificationsModule , NotificationsService} from 'angular2-notifications';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ShippingDetailComponent } from './shipping-detail/shipping-detail.component';
import { CartSummaryComponent } from './cart/cart-summary/cart-summary.component';
import { LoggedComponent } from './account/logged/logged.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UnAuthorizedComponent } from './un-authorized/un-authorized.component';
import { CardService } from './cart/card.service';
import { VatAddedPipe } from './product/vat-added.pipe';
import { ProductFilterPipe } from './product/product-filter.pipe';
import { Component } from '@angular/core/src/metadata/directives';

const appRoutes:Routes=[
  {
    path:"",
    redirectTo : "products",
    pathMatch : "full"
  },
  {
    path:"products",
    component : ProductComponent
  },
  {
    path:"products/:seoUrl",
    component : ProductComponent
  },
  {
    path:"my-cart",
    component : CartComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    AccountComponent,
    ShippingDetailComponent,
    CartSummaryComponent,
    LoggedComponent,
    NotFoundComponent,
    UnAuthorizedComponent,
    VatAddedPipe,
    ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SimpleNotificationsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  exports:[],//Dışarıya verilecek modüller...,
  providers: [
    {provide:"apiUrl",useValue:"http://northwindapi.azurewebsites.net/api"},
    NotificationsService,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
