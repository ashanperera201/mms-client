import { Component, OnInit, Inject, Input, EventEmitter, Output } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IDialogContent } from '../../../core/interfaces/index';

@Component({
  selector: 'fs-middle-popup',
  templateUrl: './fs-middle-popup.component.html',
  styleUrls: ['./fs-middle-popup.component.scss']
})

export class FsMiddlePopupComponent implements OnInit {

  @Input() dialogContent: IDialogContent;
  @Output() afterSave: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private matDialogRef: MatDialogRef<FsMiddlePopupComponent>, @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {
    this.matDialogRef.disableClose = true;
    if (this.data && this.data.dialogContent) {
      this.dialogContent = this.data.dialogContent;
    }
  }

  closeDialog = () => {
    this.matDialogRef.close();
  }

  machineDetailsAfterSave = (machineDetails: any) => {
    if (machineDetails) {
      machineDetails['modalContentCode'] = this.dialogContent.modalContentCode;
      this.afterSave.emit(machineDetails);
      this.closeDialog();
    }
  }

}
