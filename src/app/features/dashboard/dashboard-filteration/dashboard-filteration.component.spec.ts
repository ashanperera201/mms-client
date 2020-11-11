import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardFilterationComponent } from './dashboard-filteration.component';

describe('DashboardFilterationComponent', () => {
  let component: DashboardFilterationComponent;
  let fixture: ComponentFixture<DashboardFilterationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardFilterationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardFilterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
