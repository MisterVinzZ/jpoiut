import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageQuizzResultatComponent } from './page-quizz-resultat.component';

describe('PageQuizzResultatComponent', () => {
  let component: PageQuizzResultatComponent;
  let fixture: ComponentFixture<PageQuizzResultatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageQuizzResultatComponent]
    });
    fixture = TestBed.createComponent(PageQuizzResultatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
