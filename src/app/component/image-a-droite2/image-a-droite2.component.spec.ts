import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageADroite2Component } from './image-a-droite2.component';

describe('ImageADroite2Component', () => {
  let component: ImageADroite2Component;
  let fixture: ComponentFixture<ImageADroite2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImageADroite2Component]
    });
    fixture = TestBed.createComponent(ImageADroite2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
