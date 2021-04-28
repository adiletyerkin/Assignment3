import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {CreatProductsComponent} from '../main-container/creat-products/creat-products.component';


@Injectable({
  providedIn: 'root',
})
export class checkFillDataGuardService implements CanDeactivate<CreatProductsComponent>{

  canDeactivate(
    component: CreatProductsComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  confirm('На странице есть несохраненные изменения. Продолжить?');
  }


}
