import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVisiteComponent } from './page-visite.component';

describe('PageVisiteComponent', () => {
  let component: PageVisiteComponent;
  let fixture: ComponentFixture<PageVisiteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageVisiteComponent]
    });
    fixture = TestBed.createComponent(PageVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
