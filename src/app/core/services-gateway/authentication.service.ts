import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userName = 'system';
  password = '123'

  authenticated: boolean = false;

  constructor() { }

  authenticate = (userName: string, password: string) => {

    if (this.userName === userName && this.password === password) {
      localStorage.setItem('authenticated', JSON.stringify('true'));
      return true;
    }
    ///TODO
    // const payload = {
    //   userName: userName,
    //   password: password
    // }

    // this.httpClient.post('url', payload).subscribe(result => {
    //   if (result) { 
    //   }
    // }, error => {
    //   console.log(error);
    // })
  }

  isLoggedIn = (): boolean => {
    return !!JSON.parse(localStorage.getItem('authenticated'));
  }
}
