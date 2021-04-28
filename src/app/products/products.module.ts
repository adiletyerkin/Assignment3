import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import {ProductsComponent} from './products.component';
import {CandiesComponent} from './candies/candies.component';
import {DetailProdComponent} from './candies/detail-prod/detail-prod.component';
import {DetailChocolateComponent} from './chocolates/detail-chocolate/detail-chocolate.component';
import {ChocolatesComponent} from './chocolates/chocolates.component';
import {GiftsComponent} from './gifts/gifts.component';
import {NoveltiesComponent} from './novelties/novelties.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {routes} from '../app.route';
import {ConverterCurrencyPipe} from '../pipes/convertCurrency.pipe';


@NgModule({
  declarations: [
    ProductsComponent,
    CandiesComponent,
    DetailProdComponent,
    DetailChocolateComponent,
    ChocolatesComponent,
    GiftsComponent,
    NoveltiesComponent,
    ConverterCurrencyPipe
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductsModule { }
