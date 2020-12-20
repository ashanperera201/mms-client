import { Component, OnInit } from '@angular/core';
import { IJobRequest } from '../../../core/interfaces/index';
import { DashboardService, JobRequestService } from '../../../core/services/index';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  chartData: any[] = [];
  jobRequestData: IJobRequest[] = [];
  keys = Object.keys;

  constructor(private dashboardService: DashboardService, private jobRequestService: JobRequestService) {
  }

  ngOnInit() {
    this.loadChartData();
    this.loadJobRequestData();
  }

  loadJobRequestData = () => {
    this.jobRequestService.getJobRequestData().subscribe((jobRequestResult: IJobRequest[]) => {
      this.jobRequestData = jobRequestResult;
    }, error => {
      console.log(error);
    })
  }

  loadChartData = () => {
    this.chartData = this.dashboardService.getMainWidgetData();
  }
}