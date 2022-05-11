import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { MessageService } from 'src/app/services/message.service';
import { IEmployee } from '../../core/models/employee';
import { IOffice } from '../../core/models/office';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';

@Component({
  selector: 'em-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {
  employee!: IEmployee;
  offices!: IOffice[];

  @ViewChild(EmployeeFormComponent)
  formComponent!: EmployeeFormComponent;

  property = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => (this.employee = data['employee']));
    this.route.data.subscribe((data) => (this.offices = data['offices']));
  }

  savedEmployeeHandler(employee: IEmployee) {
    if (employee.id === 0) {
      this.employeeService.addEmployee(employee).subscribe((result) => {
        if (result) {
          this.messageService.sendMessage('Employee saved successfuly!');
          this.formComponent.employeeForm.reset();
          this.router.navigate(['/employees']);
        }
      });
    } else {
      this.employeeService.updateEmployee(employee).subscribe((result) => {
        if (result) {
          this.messageService.sendMessage('Employee updated successfuly!');
          this.formComponent.employeeForm.reset();
          this.router.navigate(['/employees']);
        }
      });
    }
  }
}
