import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { QrCodeComponent } from './qr-code/qr-code.component';
import { AuthRoutingModule } from './auth.routing';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { TranslocoRootModule } from '../../core/shared/transloco-root.module';

@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    QrCodeComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatSlideToggleModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslocoRootModule,
    MatDialogModule,
    NgQrScannerModule
  ],
  providers: [
  ],
  entryComponents: [
    QrCodeComponent
  ]
})
export class AuthModule { }
