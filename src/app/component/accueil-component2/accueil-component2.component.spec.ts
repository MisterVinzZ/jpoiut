import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent2Component } from './accueil-component2.component';

describe('AccueilComponent2Component', () => {
  let component: AccueilComponent2Component;
  let fixture: ComponentFixture<AccueilComponent2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent2Component]
    });
    fixture = TestBed.createComponent(AccueilComponent2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
