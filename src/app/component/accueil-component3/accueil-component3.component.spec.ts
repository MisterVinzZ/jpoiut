import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent3Component } from './accueil-component3.component';

describe('AccueilComponent3Component', () => {
  let component: AccueilComponent3Component;
  let fixture: ComponentFixture<AccueilComponent3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent3Component]
    });
    fixture = TestBed.createComponent(AccueilComponent3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
