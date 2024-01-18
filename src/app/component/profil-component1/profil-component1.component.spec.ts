import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilComponent1Component } from './profil-component1.component';

describe('ProfilComponent1Component', () => {
  let component: ProfilComponent1Component;
  let fixture: ComponentFixture<ProfilComponent1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfilComponent1Component]
    });
    fixture = TestBed.createComponent(ProfilComponent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
