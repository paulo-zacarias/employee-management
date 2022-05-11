import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeTagsComponent } from './employee-tags.component';

describe('EmployeeTagsComponent', () => {
  let component: EmployeeTagsComponent;
  let fixture: ComponentFixture<EmployeeTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
