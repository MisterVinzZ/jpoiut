import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizzComponent1Component } from './page-quizz-component1.component';

describe('PageQuizzComponent1Component', () => {
  let component: PageQuizzComponent1Component;
  let fixture: ComponentFixture<PageQuizzComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuizzComponent1Component]
    });
    fixture = TestBed.createComponent(PageQuizzComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
