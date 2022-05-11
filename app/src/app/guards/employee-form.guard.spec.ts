import { TestBed } from '@angular/core/testing';

import { EmployeeFormGuard } from './employee-form.guard';

describe('EmployeeFormGuard', () => {
  let guard: EmployeeFormGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeFormGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
