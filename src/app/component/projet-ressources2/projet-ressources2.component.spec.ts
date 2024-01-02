import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetRessources2Component } from './projet-ressources2.component';

describe('ProjetRessources2Component', () => {
  let component: ProjetRessources2Component;
  let fixture: ComponentFixture<ProjetRessources2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetRessources2Component]
    });
    fixture = TestBed.createComponent(ProjetRessources2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
