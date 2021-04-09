import {ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot} from '@angular/router';


class T {
}

export class CheckFillDataGuardService implements CanDeactivate{

  constructor() {
  }

  canDeactivate(component: T,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState?: RouterStateSnapshot): boolean {



  }

}
