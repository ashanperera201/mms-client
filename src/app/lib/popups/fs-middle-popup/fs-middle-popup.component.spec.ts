import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsMiddlePopupComponent } from './fs-middle-popup.component';

describe('FsMiddlePopupComponent', () => {
  let component: FsMiddlePopupComponent;
  let fixture: ComponentFixture<FsMiddlePopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsMiddlePopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsMiddlePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
