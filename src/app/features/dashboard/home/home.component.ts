import { Component, OnInit } from '@angular/core';
import * as FusionCharts from 'fusioncharts';
import * as lineChart from '../../../core/data/line-chart.json';
import * as pieChart from '../../../core/data/pie-chart.json';
import * as barChart from '../../../core/data/bar-chart.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataSource: any = {};
  pieChartDataSource: any = {};
  barChartDataSource: any = {};
  multiChartDataSource: any = {};

  constructor() {
    this.pieChartDataSource = pieChart['default'];
    this.barChartDataSource = barChart['default'];
    this.multiChartDataSource = barChart['default'];
    this.fetchData();
  }

  ngOnInit() {
  }

  fetchData() {
    const fusionDataStore = new FusionCharts.DataStore();
    const fusionTable = fusionDataStore.createDataTable(lineChart.data, lineChart.schema);
    this.dataSource = lineChart.chartInfo;
    this.dataSource.data = {};
    this.dataSource.data = fusionTable;
  }
}
