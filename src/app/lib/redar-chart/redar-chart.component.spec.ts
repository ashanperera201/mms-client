import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedarChartComponent } from './redar-chart.component';

describe('RedarChartComponent', () => {
  let component: RedarChartComponent;
  let fixture: ComponentFixture<RedarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
