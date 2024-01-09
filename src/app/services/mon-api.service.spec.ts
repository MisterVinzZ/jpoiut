import { TestBed } from '@angular/core/testing';

import { MonApiService } from './mon-api.service';

describe('MonApiService', () => {
  let service: MonApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
