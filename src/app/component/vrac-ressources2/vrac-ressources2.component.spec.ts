import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VracRessources2Component } from './vrac-ressources2.component';

describe('VracRessources2Component', () => {
  let component: VracRessources2Component;
  let fixture: ComponentFixture<VracRessources2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VracRessources2Component]
    });
    fixture = TestBed.createComponent(VracRessources2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
