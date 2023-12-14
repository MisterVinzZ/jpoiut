import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuestionnaireComponent } from './page-questionnaire.component';

describe('PageQuestionnaireComponent', () => {
  let component: PageQuestionnaireComponent;
  let fixture: ComponentFixture<PageQuestionnaireComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuestionnaireComponent]
    });
    fixture = TestBed.createComponent(PageQuestionnaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
