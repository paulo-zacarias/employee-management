import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { MessageService } from './message.service';

import { OfficeService } from './office.service';

describe('OfficeService', () => {
  let service: OfficeService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let messageServiceSpy: jasmine.SpyObj<MessageService>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', [
      'get',
      'put',
      'post',
      'delete',
    ]);
    httpClientSpy.get.and.returnValue(of(true));

    messageServiceSpy = jasmine.createSpyObj('MessageService', ['sendMessage']);
    TestBed.configureTestingModule({});
    service = new OfficeService(httpClientSpy, messageServiceSpy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
