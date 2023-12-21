import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizzComponent } from './page-quizz.component';

describe('PageQuizzComponent', () => {
  let component: PageQuizzComponent;
  let fixture: ComponentFixture<PageQuizzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuizzComponent]
    });
    fixture = TestBed.createComponent(PageQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
