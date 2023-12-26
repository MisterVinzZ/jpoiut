import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponent5Component } from './accueil-component5.component';

describe('AccueilComponent5Component', () => {
  let component: AccueilComponent5Component;
  let fixture: ComponentFixture<AccueilComponent5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponent5Component]
    });
    fixture = TestBed.createComponent(AccueilComponent5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
