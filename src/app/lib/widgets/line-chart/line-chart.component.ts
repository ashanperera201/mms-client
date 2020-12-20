import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class LineChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
