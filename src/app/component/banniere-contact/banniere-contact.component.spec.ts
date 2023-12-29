import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanniereContactComponent } from './banniere-contact.component';

describe('BanniereContactComponent', () => {
  let component: BanniereContactComponent;
  let fixture: ComponentFixture<BanniereContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BanniereContactComponent]
    });
    fixture = TestBed.createComponent(BanniereContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
