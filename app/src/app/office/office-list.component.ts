import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IOffice } from 'src/app/core/models/office';
import { OfficeService } from 'src/app/services/office.service';

@Component({
  selector: 'em-office-list',
  templateUrl: './office-list.component.html',
  styleUrls: ['./office-list.component.scss'],
})
export class OfficeListComponent implements OnInit {
  offices$!: Observable<IOffice[]>;

  displayedColumns: string[] = [
    'street',
    'streetNumber',
    'postcode',
    'city',
    'country',
  ];

  constructor(private officeService: OfficeService) {}

  ngOnInit(): void {
    this.offices$ = this.officeService.getOffices();
  }
}
