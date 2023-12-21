import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOnBackgroundImageComponent } from './text-on-background-image.component';

describe('TextOnBackgroundImageComponent', () => {
  let component: TextOnBackgroundImageComponent;
  let fixture: ComponentFixture<TextOnBackgroundImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextOnBackgroundImageComponent]
    });
    fixture = TestBed.createComponent(TextOnBackgroundImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
