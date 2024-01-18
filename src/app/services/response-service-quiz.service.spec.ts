import { TestBed } from '@angular/core/testing';

import { ResponseServiceQuizService } from './response-service-quiz.service';

describe('ResponseServiceQuizService', () => {
  let service: ResponseServiceQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseServiceQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
