import { Injectable } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  url = 'https://localhost:44340/api/';

  constructor(
    private angularFirebaseMessaging: AngularFireMessaging,
    private http: HttpClient
  ) { }
  
  requestPermission(userName: string) {
    console.log('request permission from ', userName);
    this.angularFirebaseMessaging.requestToken.subscribe((token) => {
      console.log(token);
      this.sendToken(token as string);
    }, (err) => {
      console.log("No permission "+ err);
    })
  }

  sendToken(token: string) {
    this.http.post<Boolean>(this.url + 'users/saveFcmToken', {
      fcmToken: token,
      userId: localStorage.getItem('userId')
    }).subscribe((result) => {
      console.log(result);
    }, (error) => {
      console.log(error);
    });
  }
}
