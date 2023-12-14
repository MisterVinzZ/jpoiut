import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageFormationComponent } from './page-formation.component';

describe('PageFormationComponent', () => {
  let component: PageFormationComponent;
  let fixture: ComponentFixture<PageFormationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageFormationComponent]
    });
    fixture = TestBed.createComponent(PageFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
