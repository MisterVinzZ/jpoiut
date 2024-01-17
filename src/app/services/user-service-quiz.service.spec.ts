import { TestBed } from '@angular/core/testing';

import { UserServiceQuizService } from './user-service-quiz.service';

describe('UserServiceQuizService', () => {
  let service: UserServiceQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserServiceQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
