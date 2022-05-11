import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MessageService } from './services/message.service';

@Component({
  selector: 'em-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _snackBar: MatSnackBar,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.messageService.messageStream$.subscribe((message) =>
      this.openSnackBar(message)
    );
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'X', {
      duration: 3000,
    });
  }

  title = 'employee-management';
}
