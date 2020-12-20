import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IIconContainer, ITemplateForm, IFormField, IDialogContent } from '../../core/interfaces/index';
import { FsMiddlePopupComponent } from '../../lib/popups/fs-middle-popup/fs-middle-popup.component';
import * as template from '../../core/forms/new-request.form';
import { JobRequests } from '../../core/models/job-request.model';
import { IconContainerComponent } from '../../lib/containers/icon-container/icon-container.component'
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})

export class RequestComponent implements OnInit {

  jobRequestSelected: boolean;
  formFields: IFormField[];
  selectedTemplate: ITemplateForm;
  jobRequestTitle: string = 'Choose Job Request Type';

  navigator: number = 0;

  constructor(private matDialog: MatDialog) { }

  ngOnInit(): void {
  }

  selectedContainer = (container: IIconContainer) => {
    this.navigator += 1;

    if (container && container.isSelected) {
      this.selectedTemplate = template.requestTemplateForms.find(x => x.templateCode === container.templateCode);
      this.jobRequestSelected = !this.jobRequestSelected;
      this.formFields = this.selectedTemplate.formFields;
    } else {
      this.jobRequestSelected = !this.jobRequestSelected;
    }
  }

  templateFieldButtonClick = (dialogContent: IDialogContent) => {
    if (dialogContent && dialogContent.id) {
      const componentDataSet = {
        dialogContent: dialogContent
      }
      const popupRef = this.matDialog.open(FsMiddlePopupComponent, {
        data: componentDataSet,
        height: dialogContent.height,
        width: dialogContent.width
      });

      const afterSaveSubscription: Subscription = popupRef.componentInstance.afterSave.subscribe(savedResult => {
        if (savedResult) {
          afterSaveSubscription.unsubscribe();
        }
      });
    }
  }

  navigateNextTab = () => {
    this.navigator += 1;
  }

  navigatePreviousTab = () => {
    this.navigator -= 1;
    if (this.navigator == 0) {
      this.jobRequestSelected = null;
    } 
  }
}
