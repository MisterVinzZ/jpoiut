import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent1Component } from './formation-component1.component';

describe('FormationComponent1Component', () => {
  let component: FormationComponent1Component;
  let fixture: ComponentFixture<FormationComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationComponent1Component]
    });
    fixture = TestBed.createComponent(FormationComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
