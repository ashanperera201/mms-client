import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { RequestRoutingModule } from './request.routing';
import { IconContainerModule } from '../../lib/containers/icon-container/icon-container.module';
import { FsMiddlePopupModule } from '../../lib/popups/fs-middle-popup/fs-middle-popup.module';

@NgModule({
  declarations: [
    RequestComponent,
  ],
  imports: [
    CommonModule,
    RequestRoutingModule,
    IconContainerModule,
    FsMiddlePopupModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RequestModule { }
