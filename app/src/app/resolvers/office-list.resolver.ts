import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { IOffice } from '../core/models/office';
import { OfficeService } from '../services/office.service';

@Injectable({
  providedIn: 'root',
})
export class OfficeListResolver implements Resolve<IOffice[]> {
  constructor(private officeService: OfficeService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<IOffice[]> {
    return this.officeService.getOffices();
  }
}
