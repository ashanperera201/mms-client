import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestComponent } from './request.component';
import { JobRequestTypeComponent } from './job-request-type/job-request-type.component';
import { EeJobRequestComponent } from './ee-job-request/ee-job-request.component';
import { MfJobRequestComponent } from './mf-job-request/mf-job-request.component';
import { ProjectJobRequestComponent } from './project-job-request/project-job-request.component';
import { MachineDetailsComponent } from './machine-details/machine-details.component';
import { FinalizationOfJobRequestComponent } from './finalization-of-job-request/finalization-of-job-request.component';
import { RequestAssignNotifyAttachComponent } from './request-assign-notify-attach/request-assign-notify-attach.component';
import { RequestRoutingModule } from './request.routing';

@NgModule({
  declarations: [
    RequestComponent,
    JobRequestTypeComponent,
    EeJobRequestComponent,
    MfJobRequestComponent,
    ProjectJobRequestComponent,
    MachineDetailsComponent,
    FinalizationOfJobRequestComponent,
    RequestAssignNotifyAttachComponent
  ],
  imports: [
    CommonModule,
    RequestRoutingModule
  ]
})
export class RequestModule { }
