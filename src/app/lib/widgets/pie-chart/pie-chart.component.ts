import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class PieChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
