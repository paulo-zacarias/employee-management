import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { OfficeListResolver } from './office-list.resolver';

describe('OfficeListResolver', () => {
  let resolver: OfficeListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    resolver = TestBed.inject(OfficeListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
