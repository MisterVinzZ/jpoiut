import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FondBleuFonceComponent } from './fond-bleu-fonce.component';

describe('FondBleuFonceComponent', () => {
  let component: FondBleuFonceComponent;
  let fixture: ComponentFixture<FondBleuFonceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FondBleuFonceComponent]
    });
    fixture = TestBed.createComponent(FondBleuFonceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
