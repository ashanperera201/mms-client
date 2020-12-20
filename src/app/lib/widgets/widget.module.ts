import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LineChartComponent } from './line-chart/line-chart.component';
import { PieChartComponent } from './pie-chart/pie-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { RedarChartComponent } from './redar-chart/redar-chart.component';
import { ScatterChartComponent } from './scatter-chart/scatter-chart.component';

@NgModule({
    declarations: [
        LineChartComponent,
        PieChartComponent,
        BarChartComponent,
        RedarChartComponent,
        ScatterChartComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        LineChartComponent,
        PieChartComponent
    ],
    providers: [],
})
export class NameModule { }
