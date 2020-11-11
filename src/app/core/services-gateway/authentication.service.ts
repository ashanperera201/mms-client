import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userName = 'system';
  password = '123'

  constructor() { }

  authenticate = (userName: string, password: string) => {
    if (this.userName === userName && this.password === password) {
      localStorage.setItem('token', 'test');
    }
  }

  isLoggedIn = (): boolean => {
    return !!localStorage.getItem('token');
  }
}
