import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent4Component } from './accueil-component4.component';

describe('AccueilComponent4Component', () => {
  let component: AccueilComponent4Component;
  let fixture: ComponentFixture<AccueilComponent4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent4Component]
    });
    fixture = TestBed.createComponent(AccueilComponent4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
