import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent4Component } from './formation-component4.component';

describe('FormationComponent4Component', () => {
  let component: FormationComponent4Component;
  let fixture: ComponentFixture<FormationComponent4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationComponent4Component]
    });
    fixture = TestBed.createComponent(FormationComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
