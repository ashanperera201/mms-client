import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { DashboardService } from '../../core/services/index';;
import { IMenuItems } from '../../core/interfaces/index';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChild('sidenav', { static: false }) sidenav: MatSidenav;

  mode: MatDrawerMode = 'side';
  opened = true;
  sideNavState: boolean = true;
  isNavigationChanged: boolean = false;
  linkText: boolean = false;
  menuItems: IMenuItems[];

  constructor(private dashboardService: DashboardService,
    private router: Router) {
  }

  ngOnInit() {
    this.loadMenuItems();
  }

  loadMenuItems = () => {
    this.menuItems = this.dashboardService.getDashboardMenuItems();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 1200) {
      this.sideNavOverMode();
    } else {
      this.sideNavSideMode();
    }
  }

  sideNavOverMode = () => {
    this.sidenav.close();
    this.mode = "over";
  }

  sideNavSideMode = () => {
    this.sidenav.open();
    this.mode = "side";
  }

  routeToRequestBoard = () => {
    this.router.navigate(['/dashboard/job-request'])
  }
}
