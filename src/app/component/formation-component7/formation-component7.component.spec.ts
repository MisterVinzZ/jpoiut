import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent7Component } from './formation-component7.component';

describe('FormationComponent7Component', () => {
  let component: FormationComponent7Component;
  let fixture: ComponentFixture<FormationComponent7Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationComponent7Component]
    });
    fixture = TestBed.createComponent(FormationComponent7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
