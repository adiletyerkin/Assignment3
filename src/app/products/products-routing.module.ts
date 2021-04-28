import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from './products.component';
import {NoveltiesComponent} from './novelties/novelties.component';
import {GiftsComponent} from './gifts/gifts.component';
import {CandiesComponent} from './candies/candies.component';
import {DetailProdComponent} from './candies/detail-prod/detail-prod.component';
import {ChocolatesComponent} from './chocolates/chocolates.component';
import {DetailChocolateComponent} from './chocolates/detail-chocolate/detail-chocolate.component';

const routes: Routes = [
  {path: 'ProductsComponent', component: ProductsComponent},
  {path: 'NoveltiesComponent', component: NoveltiesComponent},
  {path: 'GiftsComponent', component: GiftsComponent},
  {path: 'CandiesComponent', component: CandiesComponent,
    // canActivateChild:[AdminpageGuardService],
    children: [
      {path: 'DetailProdComponent/:id', component: DetailProdComponent}
    ]},
  {path: 'ChocolatesComponent', component: ChocolatesComponent,
    children: [
      {path: 'DetailChocolateComponent/:id', component: DetailChocolateComponent}
    ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
