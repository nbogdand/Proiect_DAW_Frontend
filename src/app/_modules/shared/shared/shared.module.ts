import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { TokenInterceptorProvider } from './interceptors/token.interceptor';
import { ErrorInterceptorProvider } from './interceptors/error.interceptor';
import { AlertifyService } from './services/alertify.service';
import { HighlightDirective } from './directives/highlight.directive';
import { DateConverterPipe } from './pipes/date-converter.pipe';
import { MessagingService } from './services/messaging.service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective,
    DateConverterPipe
  ],
  declarations: [
    SharedComponent,
    HighlightDirective,
    DateConverterPipe
  ],
  providers: [
    AlertifyService,
    MessagingService,

    TokenInterceptorProvider,
    ErrorInterceptorProvider
  ]
})
export class SharedModule { }
