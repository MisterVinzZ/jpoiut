import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRessources2Component } from './page-ressources2.component';

describe('PageRessources2Component', () => {
  let component: PageRessources2Component;
  let fixture: ComponentFixture<PageRessources2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRessources2Component]
    });
    fixture = TestBed.createComponent(PageRessources2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
