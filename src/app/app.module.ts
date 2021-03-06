import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {routes} from './app.route';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CreatedProductsComponent } from './main-container/created-products/created-products.component';
import { CreatProductsComponent } from './main-container/creat-products/creat-products.component';
import { ProductsComponent } from './products/products.component';
import { NoveltiesComponent } from './products/novelties/novelties.component';
import { GiftsComponent } from './products/gifts/gifts.component';
import { AboutComponent } from './about/about.component';
import { OfficialsComponent } from './about/officials/officials.component';
import { AwardsComponent } from './about/awards/awards.component';
import { NewsComponent } from './news/news.component';
import { AddressesComponent } from './addresses/addresses.component';
import { BrandShopsComponent } from './addresses/brand-shops/brand-shops.component';
import { HistoryComponent } from './history/history.component';
import { HomeComponent } from './home/home.component';
import { CandiesComponent } from './products/candies/candies.component';
import {ProductsService} from './services/products.service';
import { DetailProdComponent } from './products/candies/detail-prod/detail-prod.component';
import {ConverterCurrencyPipe} from './pipes/convertCurrency.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import {AdminpageGuardService} from './guards/adminpage-guard.service';
import { ChocolatesComponent } from './products/chocolates/chocolates.component';
import {HttpClientModule} from '@angular/common/http';
import { DetailChocolateComponent } from './products/chocolates/detail-chocolate/detail-chocolate.component';
import {checkFillDataGuardService} from './guards/checkFillData-guard.service';
import {DeactiveGuard} from './guards/deactive.guard';
import {ProductsModule} from './products/products.module';
// import {checkFillDataGuardService} from './guards/checkFillData-guard.service';
// import {ComponentCanDeac} from './guards/component-canDeac';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MainContainerComponent,
    CreatedProductsComponent,
    CreatProductsComponent,
    // ProductsComponent,
    // NoveltiesComponent,
    // GiftsComponent,
    AboutComponent,
    OfficialsComponent,
    AwardsComponent,
    NewsComponent,
    AddressesComponent,
    BrandShopsComponent,
    HistoryComponent,
    HomeComponent,
    // CandiesComponent,
    // DetailProdComponent,
    // ConverterCurrencyPipe,
    LoginPageComponent,
    // ChocolatesComponent,
    // DetailChocolateComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),
    ReactiveFormsModule,
    ProductsModule
  ],
  providers: [ProductsService,
              AdminpageGuardService,
    checkFillDataGuardService,
    DeactiveGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
