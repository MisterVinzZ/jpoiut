import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentQuizzComponent } from './component-quizz.component';

describe('ComponentQuizzComponent', () => {
  let component: ComponentQuizzComponent;
  let fixture: ComponentFixture<ComponentQuizzComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentQuizzComponent]
    });
    fixture = TestBed.createComponent(ComponentQuizzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
