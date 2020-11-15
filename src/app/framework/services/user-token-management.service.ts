import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTokenManagementService {

  constructor() { }

  storeUserToken = (userToken: any) => {
    localStorage.setItem('token', JSON.stringify(userToken));
  }

  getUserToken = () => {
    return JSON.parse(localStorage.getItem('token'));
  }
}
