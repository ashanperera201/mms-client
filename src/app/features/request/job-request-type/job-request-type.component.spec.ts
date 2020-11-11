import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRequestTypeComponent } from './job-request-type.component';

describe('JobRequestTypeComponent', () => {
  let component: JobRequestTypeComponent;
  let fixture: ComponentFixture<JobRequestTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobRequestTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobRequestTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
