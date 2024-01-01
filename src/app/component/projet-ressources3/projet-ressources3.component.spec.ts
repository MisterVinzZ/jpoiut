import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetRessources3Component } from './projet-ressources3.component';

describe('ProjetRessources3Component', () => {
  let component: ProjetRessources3Component;
  let fixture: ComponentFixture<ProjetRessources3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetRessources3Component]
    });
    fixture = TestBed.createComponent(ProjetRessources3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
