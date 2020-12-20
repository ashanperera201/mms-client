import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequestDetailGridComponent } from './job-request-detail-grid.component';

describe('JobRequestDetailGridComponent', () => {
  let component: JobRequestDetailGridComponent;
  let fixture: ComponentFixture<JobRequestDetailGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRequestDetailGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequestDetailGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
