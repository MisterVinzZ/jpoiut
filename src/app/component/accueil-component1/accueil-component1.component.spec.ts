import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent1Component } from './accueil-component1.component';

describe('AccueilComponent1Component', () => {
  let component: AccueilComponent1Component;
  let fixture: ComponentFixture<AccueilComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent1Component]
    });
    fixture = TestBed.createComponent(AccueilComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
