import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEndpointConfiguration } from '../interfaces/index';
import { UserTokenManagementService } from '../../framework/services/user-token-management.service';
import users from '../data/user.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  appId = '5fb0c889f150ac43e876b6cc';

  constructor(
    @Inject('EndpointConfiguration') private endpointConfiguration: IEndpointConfiguration,
    private userTokenManagementService: UserTokenManagementService,
    private httpClient: HttpClient) { }

  authenticate = (loginForm: any): Observable<any> => {
    return new Observable(obs => {
      const loggedUser = users.find(x => x.userName === loginForm.userName && x.password === loginForm.password);
      if (loggedUser) {
        if (loginForm.isRememberMe) {
          this.userTokenManagementService.rememberMe(loggedUser);
        }
        else {
          this.userTokenManagementService.storeUserToken(loggedUser.token);
        }
        obs.next(loggedUser.token);
        obs.complete();
      } else {
        obs.next(null);
        obs.complete();
      }
    });
  }

  isLoggedIn = (): boolean => {
    return !!this.userTokenManagementService.getUserToken();
  }

  logout = () => {
    const userPrivateKey = this.userTokenManagementService.getUserRememberMeToken();
    if (!userPrivateKey) { 
      this.userTokenManagementService.removeToken();
    }
  }

}
