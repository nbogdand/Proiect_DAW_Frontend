import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { TokenInterceptorProvider } from './interceptors/token.interceptor';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { AlertifyService } from './services/alertify.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent
  ],
  providers: [
    AlertifyService,

    TokenInterceptorProvider,
    ErrorInterceptorProvider
  ]
})
export class SharedModule { }
