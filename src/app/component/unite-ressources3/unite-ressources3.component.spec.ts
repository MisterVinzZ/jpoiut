import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteRessources3Component } from './unite-ressources3.component';

describe('UniteRessources3Component', () => {
  let component: UniteRessources3Component;
  let fixture: ComponentFixture<UniteRessources3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniteRessources3Component]
    });
    fixture = TestBed.createComponent(UniteRessources3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
