import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, onConfirm: () => any) {
    alertify.confirm(message, (event: any) => {
      if(event) {
        onConfirm();
      }
    });
  }

  success(message: string) {
    alertify.success(message);
  }

  error (message: string, onError: () => any) {
    alertify.alert(message, onError);
  }
}
