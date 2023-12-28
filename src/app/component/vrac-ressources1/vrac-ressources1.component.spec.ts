import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VracRessources1Component } from './vrac-ressources1.component';

describe('VracRessources1Component', () => {
  let component: VracRessources1Component;
  let fixture: ComponentFixture<VracRessources1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VracRessources1Component]
    });
    fixture = TestBed.createComponent(VracRessources1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
