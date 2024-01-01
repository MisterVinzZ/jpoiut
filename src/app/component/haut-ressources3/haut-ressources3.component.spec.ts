import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HautRessources3Component } from './haut-ressources3.component';

describe('HautRessources3Component', () => {
  let component: HautRessources3Component;
  let fixture: ComponentFixture<HautRessources3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HautRessources3Component]
    });
    fixture = TestBed.createComponent(HautRessources3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
