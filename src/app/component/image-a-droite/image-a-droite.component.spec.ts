import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageADroiteComponent } from './image-a-droite.component';

describe('ImageADroiteComponent', () => {
  let component: ImageADroiteComponent;
  let fixture: ComponentFixture<ImageADroiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageADroiteComponent]
    });
    fixture = TestBed.createComponent(ImageADroiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
