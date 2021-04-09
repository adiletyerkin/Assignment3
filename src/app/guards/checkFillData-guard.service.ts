import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {ComponentCanDeac} from './component-canDeac';

// import {CreatProductsComponent} from '../main-container/creat-products/creat-products.component';

export interface CreatProductsComponent {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
}


@Injectable({
  providedIn: 'root',
})
export class checkFillDataGuardService implements CanDeactivate<ComponentCanDeac>{

  canDeactivate(component: ComponentCanDeac,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
                ): boolean {

    if(!component.canDeactivate()){
      if (confirm("You have unsaved changes! If you leave, your changes will be lost.")) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }


}
