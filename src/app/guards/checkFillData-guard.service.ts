import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {CreatProductsComponent} from '../main-container/creat-products/creat-products.component';


export class checkFillDataGuardService implements CanDeactivate<CreatProductsComponent>{

  canDeactivate(component: CreatProductsComponent,
                route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot
                ): Promise<boolean> |  boolean {


    if (!component.crisis || component.crisis.name === component.editName) {
      return true;
    }
    // Otherwise ask the user with the dialog service and return its
    // observable which resolves to true or false when the user decides
    return component.dialogService.confirm('Discard changes?');

  }


}
