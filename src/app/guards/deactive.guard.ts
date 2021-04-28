import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {CreatProductsComponent} from '../main-container/creat-products/creat-products.component';

@Injectable()
export class DeactiveGuard implements CanDeactivate<CreatProductsComponent> {
  canDeactivate(
    component: CreatProductsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.ch != true || confirm("texttext");
  }

}
