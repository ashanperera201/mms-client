import { Component, OnInit, ViewChild } from '@angular/core';
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
}
