import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparationContactComponent } from './separation-contact.component';

describe('SeparationContactComponent', () => {
  let component: SeparationContactComponent;
  let fixture: ComponentFixture<SeparationContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeparationContactComponent]
    });
    fixture = TestBed.createComponent(SeparationContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
