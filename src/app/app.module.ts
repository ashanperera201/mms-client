import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastrModule } from 'ngx-toastr';
import { gateway } from '../environments/environment';
import { ServicesGatewayModule } from './core/services/index';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './core/shared/transloco-root.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(),
    ServicesGatewayModule.foorRoot(gateway.server),
    HttpClientModule,
    TranslocoRootModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
