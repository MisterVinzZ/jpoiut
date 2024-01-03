import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexteContactComponent } from './texte-contact.component';

describe('TexteContactComponent', () => {
  let component: TexteContactComponent;
  let fixture: ComponentFixture<TexteContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TexteContactComponent]
    });
    fixture = TestBed.createComponent(TexteContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
