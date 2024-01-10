import { TestBed } from '@angular/core/testing';

import { UnityLoaderService } from './unity-loader.service';

describe('UnityLoaderService', () => {
  let service: UnityLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnityLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
