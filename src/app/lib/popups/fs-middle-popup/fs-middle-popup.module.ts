import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { FsMiddlePopupComponent } from './fs-middle-popup.component';
import { QrCodeContentComponent } from './qr-code-content/qr-code-content.component';
import { MachineDetailsContentComponent } from './machine-details-content/machine-details-content.component';


@NgModule({
  declarations: [
    FsMiddlePopupComponent,
    QrCodeContentComponent,
    MachineDetailsContentComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    NgQrScannerModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FsMiddlePopupComponent,
    QrCodeContentComponent,
    MachineDetailsContentComponent
  ],
  entryComponents: [
    FsMiddlePopupComponent,
    QrCodeContentComponent,
    MachineDetailsContentComponent
  ]
})
export class FsMiddlePopupModule { }
