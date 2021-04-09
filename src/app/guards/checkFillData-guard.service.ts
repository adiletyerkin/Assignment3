import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

// import {CreatProductsComponent} from '../main-container/creat-products/creat-products.component';

export interface CreatProductsComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn: 'root',
})
export class checkFillDataGuardService implements CanDeactivate<CreatProductsComponent>{

  canDeactivate(component: CreatProductsComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
                ){

    return component.canDeactivate ? component.canDeactivate() : true;

  }


}
