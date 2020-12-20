import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserTokenManagementService {

  constructor() { }

  storeUserToken = (userToken: any) => {
    localStorage.setItem('token', userToken);
  }

  getUserToken = () => {
    return localStorage.getItem('token');
  }

  getUserRememberMeToken = () => {
    return localStorage.getItem('remember-me-token');
  }

  rememberMe = (user: any) => {
    if (user) {
      localStorage.setItem('remember-me-token', user.privateKey);
      this.storeUserToken(user.token);
    }
  }

  removeToken = () => {
    localStorage.removeItem('token');
  }

  removeUserPrivateKey = () => {
    localStorage.removeItem('remember-me-token');
  }

}
