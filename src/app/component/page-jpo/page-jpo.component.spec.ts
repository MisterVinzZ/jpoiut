import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageJPOComponent } from './page-jpo.component';

describe('PageJPOComponent', () => {
  let component: PageJPOComponent;
  let fixture: ComponentFixture<PageJPOComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageJPOComponent]
    });
    fixture = TestBed.createComponent(PageJPOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
