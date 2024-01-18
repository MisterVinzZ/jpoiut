import { TestBed } from '@angular/core/testing';

import { QuestionServiceQuizService } from './question-service-quiz.service';

describe('QuestionServiceQuizService', () => {
  let service: QuestionServiceQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionServiceQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
