import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationComponent1Component } from './formation-component1.component';

describe('FormationComponent1Component', () => {
  let component: FormationComponent1Component;
  let fixture: ComponentFixture<FormationComponent1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormationComponent1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FormationComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
