import { Component, Input, OnInit } from '@angular/core';
import { IMenuItems } from '../../../../core/interfaces/index';

@Component({
  selector: 'menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.scss']
})
export class MenuItemsComponent implements OnInit {

  @Input() menuItems: IMenuItems[];
  constructor() { }

  ngOnInit(): void {
  }

}
