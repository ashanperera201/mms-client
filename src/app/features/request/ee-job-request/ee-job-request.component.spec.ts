import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EeJobRequestComponent } from './ee-job-request.component';

describe('EeJobRequestComponent', () => {
  let component: EeJobRequestComponent;
  let fixture: ComponentFixture<EeJobRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EeJobRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EeJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
