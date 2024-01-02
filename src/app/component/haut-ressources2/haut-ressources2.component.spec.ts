import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HautRessources2Component } from './haut-ressources2.component';

describe('HautRessources2Component', () => {
  let component: HautRessources2Component;
  let fixture: ComponentFixture<HautRessources2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HautRessources2Component]
    });
    fixture = TestBed.createComponent(HautRessources2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
