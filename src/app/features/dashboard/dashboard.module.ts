import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FusionChartsModule } from "angular-fusioncharts";
import * as FusionCharts from 'fusioncharts';
import * as time from 'fusioncharts/fusioncharts.timeseries';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as Fusion from 'fusioncharts/themes/fusioncharts.theme.fusion';

import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { DashboardFilterationComponent } from './dashboard-filteration/dashboard-filteration.component';
import { JobRequestDetailGridComponent } from './job-request-detail-grid/job-request-detail-grid.component';
import { TopToolBarComponent } from './navigation/top-tool-bar/top-tool-bar.component';
import { MenuItemsComponent } from './navigation/menu-items/menu-items.component';
import { DashboardRoutingModule } from './dashboard.routing';
import { PipesModule } from '../../core/pipes/pipe.module';
import { TranslocoRootModule } from '../../core/shared/transloco-root.module';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, time, Charts, Fusion)

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    DashboardFilterationComponent,
    JobRequestDetailGridComponent,
    TopToolBarComponent,
    MenuItemsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatProgressBarModule,
    FusionChartsModule,
    PipesModule,
    TranslocoRootModule
  ]
})
export class DashboardModule { }
