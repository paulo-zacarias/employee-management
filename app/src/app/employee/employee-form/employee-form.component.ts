import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IEmployee } from '../../core/models/employee';
import { IOffice } from '../../core/models/office';

@Component({
  selector: 'em-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  @Input() employee!: IEmployee;
  @Input() offices!: IOffice[];
  @Output() savedEmployee = new EventEmitter<IEmployee>();

  employeeForm!: FormGroup;
  today: Date;

  constructor(private fb: FormBuilder) {
    this.today = new Date();
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      phone: ['', Validators.required],
      tags: [],
      officeId: ['', Validators.required],
    });

    this.employeeForm.setValue({
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      phone: this.employee.phone,
      birthDate: this.employee.id === 0 ? '' : this.employee.birthDate,
      officeId: this.employee.officeId,
      tags: this.employee.tags,
    });
  }

  tagEventHandler(event: any) {
    this.employeeForm.get('tags')?.setValue(event);
    this.employeeForm.markAsDirty();
  }

  save(): void {
    if (this.employeeForm.valid) {
      this.employee = { ...this.employee, ...this.employeeForm.value };
      this.savedEmployee.emit(this.employee);
    }
  }

  get phoneErrorMessage() {
    const phoneForm = this.employeeForm.get('phone');
    if (phoneForm?.hasError('required')) {
      return 'Value required';
    }

    return phoneForm?.hasError('pattern') ? 'Invalid phone format' : '';
  }

  get dateErrorMessage() {
    const phoneForm = this.employeeForm.get('birthDate');
    if (phoneForm?.hasError('required')) {
      return 'Value required';
    }

    return phoneForm?.hasError('matDatepickerMax') ? 'Invalid date' : '';
  }
}
