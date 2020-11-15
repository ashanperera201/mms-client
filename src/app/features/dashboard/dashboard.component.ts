import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

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

  constructor() {
  }

  ngOnInit() {
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
}
