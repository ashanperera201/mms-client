import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from '../../../core/services/index';
import { QrCodeComponent } from '../qr-code/qr-code.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  loginFormGroup: FormGroup;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private toastrService: ToastrService,
    private matDialog: MatDialog) { }

  ngOnInit(): void {
    this.initializeFormGroup();
    if (this.authenticationService.isLoggedIn()) {
      this.router.navigate(['dashboard']);
    } else {
      this.router.navigate(['auth']);
    }
  }

  initializeFormGroup = () => {
    this.loginFormGroup = new FormGroup({
      userName: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      isRememberMe: new FormControl(false)
    });
  }

  proceedLogin = () => {
    const userName: string = this.loginFormGroup.get('userName').value;
    const password: string = this.loginFormGroup.get('password').value;

    if (this.loginFormGroup.valid) {
      this.authenticationService.authenticate(this.loginFormGroup.value).subscribe(tokenResult => {
        if (tokenResult) {
          this.router.navigate(['dashboard']);
        }
      });
    } else {
      if (userName || password) {
        `${userName ? '' : this.toastrService.error('Please enter user name', "Error")} 
         ${password ? '' : this.toastrService.error('please enter password', "Error")}`;
      } else {
        this.toastrService.error('Please enter user name and password', "Error")
      }
    }
  }

  proceedQrCode = () => {
    const qrCodeDialogRef = this.matDialog.open(QrCodeComponent, {
      width: '60rem',
      height: '55rem'
    });
  }

}
