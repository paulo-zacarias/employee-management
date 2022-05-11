import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, EMPTY, Observable } from 'rxjs';
import { IEmployee } from '../core/models/employee';
import { HttpHeaders } from '@angular/common/http';
import { OfficeService } from './office.service';
import { catchError, map } from 'rxjs/operators';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  apiUrl: string = '/api/v1';

  constructor(
    private http: HttpClient,
    private officeService: OfficeService,
    private messageService: MessageService
  ) {}

  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.apiUrl + '/employees').pipe(
      catchError((err) => {
        this.messageService.sendMessage(err.message);
        return EMPTY;
      })
    );
  }

  getEmployeeById(id: number): Observable<IEmployee> {
    return this.http.get<IEmployee>(this.apiUrl + `/employees/${id}`).pipe(
      catchError((err) => {
        this.messageService.sendMessage(err.message);
        return EMPTY;
      })
    );
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + `/employees/${id}`, httpOptions).pipe(
      catchError((err) => {
        this.messageService.sendMessage(err.message);
        return EMPTY;
      })
    );
  }

  addEmployee(employee: IEmployee): Observable<IEmployee> {
    return this.http
      .post<IEmployee>(this.apiUrl + '/employees', employee, httpOptions)
      .pipe(
        catchError((err) => {
          this.messageService.sendMessage(err.message);
          return EMPTY;
        })
      );
  }

  updateEmployee(employee: IEmployee): Observable<unknown> {
    return this.http
      .put<IEmployee>(
        this.apiUrl + `/employees/${employee.id}`,
        employee,
        httpOptions
      )
      .pipe(
        catchError((err) => {
          this.messageService.sendMessage(err.message);
          return EMPTY;
        })
      );
  }

  employees$ = this.http.get<IEmployee[]>(this.apiUrl + '/employees').pipe(
    catchError((err) => {
      this.messageService.sendMessage(err.message);
      return EMPTY;
    })
  );

  employeesWithLocation$ = combineLatest([
    this.employees$,
    this.officeService.offices$,
  ]).pipe(
    map(([employees, offices]) =>
      employees.map((employee) => ({
        ...employee,
        location: offices.find((office) => employee.officeId === office.id)
          ?.city,
      }))
    )
  );
}
