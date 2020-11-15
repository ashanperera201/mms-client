import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../../core/services-gateway/authentication.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userName: string;
  password: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  proceedLogin = () => {
    if (this.userName && this.password) {
      this.authenticationService.authenticate(this.userName, this.password);
      this.router.navigate(['dashboard']);
    } else {
      console.log(`${this.userName ? '' : 'Please enter user name'} ${this.password ? '' : 'please enter password'} `)
    }
  }
}
