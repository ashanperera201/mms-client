import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineDetailsContentComponent } from './machine-details-content.component';

describe('MachineDetailsContentComponent', () => {
  let component: MachineDetailsContentComponent;
  let fixture: ComponentFixture<MachineDetailsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineDetailsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
