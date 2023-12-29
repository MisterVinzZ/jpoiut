import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetRessources1Component } from './projet-ressources1.component';

describe('ProjetRessources1Component', () => {
  let component: ProjetRessources1Component;
  let fixture: ComponentFixture<ProjetRessources1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjetRessources1Component]
    });
    fixture = TestBed.createComponent(ProjetRessources1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
