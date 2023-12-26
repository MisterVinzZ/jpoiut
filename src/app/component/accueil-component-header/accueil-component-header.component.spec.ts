import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilComponentHeaderComponent } from './accueil-component-header.component';

describe('AccueilComponentHeaderComponent', () => {
  let component: AccueilComponentHeaderComponent;
  let fixture: ComponentFixture<AccueilComponentHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccueilComponentHeaderComponent]
    });
    fixture = TestBed.createComponent(AccueilComponentHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
