import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { catchError, shareReplay } from 'rxjs/operators';
import { IOffice } from '../core/models/office';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class OfficeService {
  apiUrl: string = '/api/v1/offices';

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getOffices(): Observable<IOffice[]> {
    return this.http.get<IOffice[]>(this.apiUrl).pipe(
      shareReplay(1),
      catchError((err) => {
        this.messageService.sendMessage(err.message);
        return EMPTY;
      })
    );
  }

  getOfficeById(id: number): Observable<IOffice> {
    throw new Error('Method not implemented.');
  }

  addOffice(office: IOffice): Observable<IOffice> {
    throw new Error('Method not implemented.');
  }

  deleteOffice(id: number): Observable<unknown> {
    throw new Error('Method not implemented.');
  }

  updateOffice(office: IOffice): Observable<IOffice> {
    throw new Error('Method not implemented.');
  }

  offices$ = this.http.get<IOffice[]>(this.apiUrl).pipe(shareReplay(1));
}
