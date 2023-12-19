import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParagrapheCentreComponent } from './paragraphe-centre.component';

describe('ParagrapheCentreComponent', () => {
  let component: ParagrapheCentreComponent;
  let fixture: ComponentFixture<ParagrapheCentreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParagrapheCentreComponent]
    });
    fixture = TestBed.createComponent(ParagrapheCentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
