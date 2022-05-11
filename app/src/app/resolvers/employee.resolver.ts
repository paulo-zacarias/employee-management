import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { IEmployee } from '../core/models/employee';
import { EmployeeService } from '../services/employee.service';

const newEmployee: IEmployee = {
  id: 0,
  firstName: '',
  lastName: '',
  phone: '',
  birthDate: new Date(),
  officeId: 0,
  tags: [],
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeResolver implements Resolve<IEmployee> {
  constructor(private employeeService: EmployeeService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IEmployee> {
    const id = +route.paramMap.get('id')!;
    if (id === 0) return of(newEmployee);
    return this.employeeService.getEmployeeById(id);
  }
}
