import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteRessources2Component } from './unite-ressources2.component';

describe('UniteRessources2Component', () => {
  let component: UniteRessources2Component;
  let fixture: ComponentFixture<UniteRessources2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UniteRessources2Component]
    });
    fixture = TestBed.createComponent(UniteRessources2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
