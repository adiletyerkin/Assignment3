import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { CreatedProductsComponent } from './main-container/created-products/created-products.component';
import { CreatProductsComponent } from './main-container/creat-products/creat-products.component';

export const routes: Routes = [
  // {path: 'home', component: HomeComponent},
  // {path: 'user', component: UserComponent,
  //   canActivate: [UserGuardService],
  //   children: [
  //     {path: 'detail/:id', component: UserDetailComponent}
  //   ]},
  // {path: 'contact', component: ContactComponent},
  // {path: 'old-product', component: ProductComponent},
  // {path: 'new-product', loadChildren: './new-product/new-product.module#NewProductModule' },
  // {path: '', redirectTo: 'home', pathMatch: 'full'},
  // {path: '**', component: ErrorComponent}
];
