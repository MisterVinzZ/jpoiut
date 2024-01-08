import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizzResultatComponent1Component } from './page-quizz-resultat-component1.component';

describe('PageQuizzResultatComponent1Component', () => {
  let component: PageQuizzResultatComponent1Component;
  let fixture: ComponentFixture<PageQuizzResultatComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuizzResultatComponent1Component]
    });
    fixture = TestBed.createComponent(PageQuizzResultatComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
