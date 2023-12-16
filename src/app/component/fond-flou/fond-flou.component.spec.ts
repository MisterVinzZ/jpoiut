import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondFlouComponent } from './fond-flou.component';

describe('FondFlouComponent', () => {
  let component: FondFlouComponent;
  let fixture: ComponentFixture<FondFlouComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondFlouComponent]
    });
    fixture = TestBed.createComponent(FondFlouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
