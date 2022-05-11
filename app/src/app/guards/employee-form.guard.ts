import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeEditComponent } from '../employee/employee-edit/employee-edit.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFormGuard implements CanDeactivate<EmployeeEditComponent> {
  canDeactivate(
    component: EmployeeEditComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (component.formComponent.employeeForm.dirty) {
      return confirm('Navigate away and lose all changes?');
    }
    return true;
  }
}
