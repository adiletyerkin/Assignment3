import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
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
import { ProductsDetailsComponent } from './products/products-details/products-details.component';


export const routes: Routes = [
  {path: 'ProductsComponent', component: ProductsComponent},
  {path: 'home', component: HomeComponent},
  {path: 'NoveltiesComponent', component: NoveltiesComponent},
  {path: 'GiftsComponent', component: GiftsComponent},
  {path: 'AboutComponent', component: AboutComponent},
  {path: 'OfficialsComponent', component: OfficialsComponent},
  {path: 'AwardsComponent', component: AwardsComponent},
  {path: 'NewsComponent', component: NewsComponent},
  {path: 'AddressesComponent', component: AddressesComponent},
  {path: 'BrandShopsComponent', component: BrandShopsComponent},
  {path: 'HistoryComponent', component: HistoryComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'CreatedProductsComponent', component: CreatedProductsComponent,
    canActivate: [ProductsDetailsComponent],
    children: [
      {path: 'detail/:id', component: ProductsDetailsComponent}
    ]}
  // {path: '**', component: ErrorComponent}
];
