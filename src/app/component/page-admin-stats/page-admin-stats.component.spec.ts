import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAdminStatsComponent } from './page-admin-stats.component';

describe('PageAdminStatsComponent', () => {
  let component: PageAdminStatsComponent;
  let fixture: ComponentFixture<PageAdminStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAdminStatsComponent]
    });
    fixture = TestBed.createComponent(PageAdminStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
