import { Component, OnInit, ViewChild } from '@angular/core';
import { QrScannerComponent } from 'angular2-qrscanner';

@Component({
  selector: 'qr-code-content',
  templateUrl: './qr-code-content.component.html',
  styleUrls: ['./qr-code-content.component.scss']
})
export class QrCodeContentComponent implements OnInit {

  @ViewChild("qrCodeScanner", { static: true }) qrScannerComponent: QrScannerComponent;

  constructor() { }

  ngOnInit(): void {
    this.qrScannerComponent.getMediaDevices().then(devices => {
      const videoDevices: MediaDeviceInfo[] = [];
      for (const device of devices) {
        if (device.kind.toString() === 'videoinput') {
          videoDevices.push(device);
        }
      }
      if (videoDevices.length > 0) {
        let choosenDev;
        for (const dev of videoDevices) {
          if (dev.label.includes('front')) {
            choosenDev = dev;
            break;
          }
        }
        if (choosenDev) {
          this.qrScannerComponent.chooseCamera.next(choosenDev);
        } else {
          this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
        }
      }
    });
  }

  afterCapturing = (event) => {
    debugger
  }

}
