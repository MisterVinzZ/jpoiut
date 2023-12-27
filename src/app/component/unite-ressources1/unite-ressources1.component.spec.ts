import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteRessources1Component } from './unite-ressources1.component';

describe('UniteRessources1Component', () => {
  let component: UniteRessources1Component;
  let fixture: ComponentFixture<UniteRessources1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniteRessources1Component]
    });
    fixture = TestBed.createComponent(UniteRessources1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
