import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VracRessources3Component } from './vrac-ressources3.component';

describe('VracRessources3Component', () => {
  let component: VracRessources3Component;
  let fixture: ComponentFixture<VracRessources3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VracRessources3Component]
    });
    fixture = TestBed.createComponent(VracRessources3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
