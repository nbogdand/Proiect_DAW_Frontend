import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { TokenInterceptorProvider } from './interceptors/token.interceptor';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent
  ],
  providers: [
    TokenInterceptorProvider,
  ]
})
export class SharedModule { }
