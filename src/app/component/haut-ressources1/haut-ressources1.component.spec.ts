import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HautRessources1Component } from './haut-ressources1.component';

describe('HautRessources1Component', () => {
  let component: HautRessources1Component;
  let fixture: ComponentFixture<HautRessources1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HautRessources1Component]
    });
    fixture = TestBed.createComponent(HautRessources1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
