import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJobRequestComponent } from './project-job-request.component';

describe('ProjectJobRequestComponent', () => {
  let component: ProjectJobRequestComponent;
  let fixture: ComponentFixture<ProjectJobRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectJobRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
