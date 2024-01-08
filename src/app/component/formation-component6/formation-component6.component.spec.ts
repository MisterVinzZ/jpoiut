import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent6Component } from './formation-component6.component';

describe('FormationComponent6Component', () => {
  let component: FormationComponent6Component;
  let fixture: ComponentFixture<FormationComponent6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationComponent6Component]
    });
    fixture = TestBed.createComponent(FormationComponent6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
