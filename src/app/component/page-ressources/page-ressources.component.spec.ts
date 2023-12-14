import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRessourcesComponent } from './page-ressources.component';

describe('PageRessourcesComponent', () => {
  let component: PageRessourcesComponent;
  let fixture: ComponentFixture<PageRessourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageRessourcesComponent]
    });
    fixture = TestBed.createComponent(PageRessourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
