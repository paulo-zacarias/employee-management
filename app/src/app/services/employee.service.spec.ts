import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { EmployeeService } from './employee.service';
import { MessageService } from './message.service';
import { OfficeService } from './office.service';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;
  let officeServiceSpy: jasmine.SpyObj<OfficeService>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'put',
      'post',
      'delete',
    ]);
    httpClientSpy.get.and.returnValue(of(true));

    messageServiceSpy = jasmine.createSpyObj('MessageService', ['sendMessage']);
    officeServiceSpy = jasmine.createSpyObj('MessageService', ['sendMessage']);

    TestBed.configureTestingModule({});
    service = new EmployeeService(
      httpClientSpy,
      officeServiceSpy,
      messageServiceSpy
    );
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
