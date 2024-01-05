import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent5Component } from './formation-component5.component';

describe('FormationComponent5Component', () => {
  let component: FormationComponent5Component;
  let fixture: ComponentFixture<FormationComponent5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationComponent5Component]
    });
    fixture = TestBed.createComponent(FormationComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
