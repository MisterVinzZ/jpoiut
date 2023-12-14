import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminEditionComponent } from './page-admin-edition.component';

describe('PageAdminEditionComponent', () => {
  let component: PageAdminEditionComponent;
  let fixture: ComponentFixture<PageAdminEditionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAdminEditionComponent]
    });
    fixture = TestBed.createComponent(PageAdminEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
