import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { concatMap, map, takeUntil } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import { IEmployee } from '../../core/models/employee';
import { IOffice } from 'src/app/core/models/office';
import { OfficeService } from 'src/app/services/office.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'em-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {
  employees!: IEmployee[];
  offices$!: Observable<IOffice[]>;
  dataSource = new MatTableDataSource(this.employees);
  destroy$ = new Subject<boolean>();

  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'birthDate',
    'phone',
    'office',
    'action',
  ];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  private officeSelectionSubject = new BehaviorSubject<number>(0);
  officeSelectedAction$ = this.officeSelectionSubject.asObservable();

  employees$ = combineLatest([
    this.employeeService.employeesWithLocation$,
    this.officeSelectedAction$,
  ]).pipe(
    map(([employees, selectedOfficeId]) =>
      employees.filter((employee) =>
        selectedOfficeId ? employee.officeId === selectedOfficeId : true
      )
    )
  );

  constructor(
    private employeeService: EmployeeService,
    private officeService: OfficeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.offices$ = this.officeService.getOffices();
    this.employees$.subscribe((employees) => {
      this.employees = employees;
      this.dataSource.data = this.employees;
    });
  }

  deleteHandler(id: number): void {
    const dialogRef = this.dialog.open(ConfirmationDialog);

    // dialogRef.afterClosed().subscribe((confirmation) => {
    //   if (confirmation) {
    //     this.employees$ = this.employeeService
    //       .deleteEmployee(id)
    //       .pipe(concatMap(() => this.employeeService.employeesWithLocation$));
    //   }
    // });
    dialogRef
      .afterClosed()
      .pipe(takeUntil(this.destroy$))
      .subscribe((confirmation) => {
        if (confirmation) {
          this.employeeService.deleteEmployee(id).subscribe(() =>
            this.employees$.subscribe((employees) => {
              this.employees = employees;
              this.dataSource.data = this.employees;
            })
          );
        }
      });
  }

  onSelectionChange(event: any) {
    this.officeSelectionSubject.next(+event.value);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}

@Component({
  selector: 'confirmation-dialog',
  template: `<h1 mat-dialog-title>Confirm delete</h1>
    <div mat-dialog-content>
      <p>Are you sure you want to delete selected user?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button [mat-dialog-close]="false">Cancel</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Yes</button>
    </div>`,
})
export class ConfirmationDialog {
  constructor(public dialogRef: MatDialogRef<ConfirmationDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
