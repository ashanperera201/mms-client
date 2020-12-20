import { Injectable } from '@angular/core';
import dashboardData from '../data/dashboard.json';
import dashboardMenuItems from '../data/menu-items.json';
import { IMenuItems } from '../interfaces/index';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getMainWidgetData = () => {
    return dashboardData;
  }

  getDashboardMenuItems = (): IMenuItems[] => {
    return dashboardMenuItems;
  }
}
