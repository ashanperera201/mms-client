import { Component, OnInit, Input } from '@angular/core';
import { MatDrawerMode, MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'top-tool-bar',
  templateUrl: './top-tool-bar.component.html',
  styleUrls: ['./top-tool-bar.component.scss']
})
export class TopToolBarComponent implements OnInit {

  @Input() sidenav: MatSidenav;

  constructor() { }

  ngOnInit(): void {
  }

}
