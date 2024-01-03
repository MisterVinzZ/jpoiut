import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRessources3Component } from './page-ressources3.component';

describe('PageRessources3Component', () => {
  let component: PageRessources3Component;
  let fixture: ComponentFixture<PageRessources3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRessources3Component]
    });
    fixture = TestBed.createComponent(PageRessources3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
