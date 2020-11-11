import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MfJobRequestComponent } from './mf-job-request.component';

describe('MfJobRequestComponent', () => {
  let component: MfJobRequestComponent;
  let fixture: ComponentFixture<MfJobRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MfJobRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MfJobRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
