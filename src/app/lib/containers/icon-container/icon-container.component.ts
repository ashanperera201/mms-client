import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { IIconContainer } from '../../../core/interfaces/index';
import { JobRequestService } from '../../../core/services/job-request/job-request.service';

@Component({
  selector: 'icon-container',
  templateUrl: './icon-container.component.html',
  styleUrls: ['./icon-container.component.scss']
})
export class IconContainerComponent implements OnInit {

  @Input() iconContainers: IIconContainer[];
  @Output() afterSelection: EventEmitter<IIconContainer> = new EventEmitter<IIconContainer>();

  constructor(private jobRequestService: JobRequestService) { }

  ngOnInit(): void {
    if (!this.iconContainers || this.iconContainers.length === 0) {
      this.loadRequestContainers();
    }
  }

  loadRequestContainers = () => {
    this.jobRequestService.getRequestContainers().subscribe((iconContainerResult: IIconContainer[]) => {
      if (iconContainerResult && iconContainerResult.length > 0) {
        this.iconContainers = iconContainerResult;
      }
    }, error => {
      console.log(error);
    });
  }

  containerSelection = (selectedContainer: IIconContainer) => {
    let container = this.iconContainers.find(x => x.templateCode === selectedContainer.templateCode && x.isSelected);
    if (container) {
      selectedContainer.isSelected = false;
    } else {
      selectedContainer.isSelected = true;
    }
    this.iconContainers.map(iconContainer => {
      if (iconContainer.isSelected && iconContainer.templateCode !== selectedContainer.templateCode) {
        iconContainer.isSelected = false;
      }
      return iconContainer;
    });
    this.afterSelection.emit(selectedContainer);
  }

}
