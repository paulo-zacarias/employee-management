import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageSubject = new Subject<string>();
  messageStream$ = this.messageSubject.asObservable();

  constructor() {}

  sendMessage(message: string): void {
    this.messageSubject.next(message);
  }
}
