import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent2Component } from './formation-component2.component';

describe('FormationComponent2Component', () => {
  let component: FormationComponent2Component;
  let fixture: ComponentFixture<FormationComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationComponent2Component]
    });
    fixture = TestBed.createComponent(FormationComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
