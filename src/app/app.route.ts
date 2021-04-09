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
import {CandiesComponent} from './products/candies/candies.component';
import {DetailProdComponent} from './products/candies/detail-prod/detail-prod.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {AdminpageGuardService} from './guards/adminpage-guard.service';
import {checkFillDataGuardService} from './guards/checkFillData-guard.service';

export const routes: Routes = [
  {path: 'ProductsComponent', component: ProductsComponent,
    // children: [
    //   {path: 'detail/:id', component: CandiesComponent}
    // ]
  },
  {path: 'home', component: HomeComponent,
    canActivate: [AdminpageGuardService]},
  {path: 'NoveltiesComponent', component: NoveltiesComponent},
  {path: 'GiftsComponent', component: GiftsComponent},
  {path: 'AboutComponent', component: AboutComponent},
  {path: 'OfficialsComponent', component: OfficialsComponent},
  {path: 'AwardsComponent', component: AwardsComponent},
  {path: 'NewsComponent', component: NewsComponent},
  {path: 'AddressesComponent', component: AddressesComponent},
  {path: 'BrandShopsComponent', component: BrandShopsComponent},
  {path: 'HistoryComponent', component: HistoryComponent},
  {path: 'CandiesComponent', component: CandiesComponent,
    canActivateChild:[AdminpageGuardService],
  children: [
    {path: 'DetailProdComponent/:id', component: DetailProdComponent}
  ]},
  {path: '', redirectTo: 'ProductsComponent', pathMatch: 'full'},
  {path: 'CreatedProductsComponent', component: CreatedProductsComponent},
  {path: 'CreatProductsComponent', component: CreatProductsComponent,
  canDeactivate: [checkFillDataGuardService]},
  {path: 'LoginPageComponent', component: LoginPageComponent}

];
