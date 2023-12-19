import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageAGaucheComponent } from './image-a-gauche.component';

describe('ImageAGaucheComponent', () => {
  let component: ImageAGaucheComponent;
  let fixture: ComponentFixture<ImageAGaucheComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageAGaucheComponent]
    });
    fixture = TestBed.createComponent(ImageAGaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
