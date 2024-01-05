import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent3Component } from './formation-component3.component';

describe('FormationComponent3Component', () => {
  let component: FormationComponent3Component;
  let fixture: ComponentFixture<FormationComponent3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormationComponent3Component]
    });
    fixture = TestBed.createComponent(FormationComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
