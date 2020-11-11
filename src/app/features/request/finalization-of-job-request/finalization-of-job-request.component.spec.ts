import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalizationOfJobRequestComponent } from './finalization-of-job-request.component';

describe('FinalizationOfJobRequestComponent', () => {
  let component: FinalizationOfJobRequestComponent;
  let fixture: ComponentFixture<FinalizationOfJobRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalizationOfJobRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalizationOfJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
