import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestAssignNotifyAttachComponent } from './request-assign-notify-attach.component';

describe('RequestAssignNotifyAttachComponent', () => {
  let component: RequestAssignNotifyAttachComponent;
  let fixture: ComponentFixture<RequestAssignNotifyAttachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestAssignNotifyAttachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestAssignNotifyAttachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
