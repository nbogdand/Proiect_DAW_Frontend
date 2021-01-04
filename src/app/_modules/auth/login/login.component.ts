import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../../shared/shared/services/alertify.service';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Router } from '@angular/router';
import { AuthState } from '../_models/auth.state';

declare var FB: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output("changeState") changeState: EventEmitter<AuthState> = new EventEmitter<AuthState>();

  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
    this.setupFacebookSDK();
    // this.checkFacebookLoginStatus();
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success("Logged in success");
      this.router.navigate(['/player']);
    }, error => {
      this.alertify.error("Failed to login", () => { });
    })
  }

  setupFacebookSDK() {
    // (window as any).fbAsyncInit = function () {
    //   FB.init({
    //     appId: '163180058482512',
    //     cookie: true,
    //     xfbml: true,
    //     version: 'v9.0'
    //   });

    //   FB.AppEvents.logPageView();
      
    //   (function(d, s, id){
    //     var js, fjs = d.getElementsByTagName(s)[0];
    //     if (d.getElementById(id)) {return;}
    //     js = d.createElement(s); js.id = id;
    //     (js as any).src = "https://connect.facebook.net/en_US/sdk.js";
    //     fjs.parentNode?.insertBefore(js, fjs);
    //   }(document, 'script', 'facebook-jssdk'));
    // };
  }

  checkFacebookLoginStatus() {
    FB.getLoginStatus((response: any) => {
      console.log(response);
      switch (response.status) {
        case 'connected':
          console.log(response.authResponse);
          // this.router.navigate(['/player']);
          break;
      }
    });
  }

  cancel() {
    this.changeState.emit(AuthState.AUTH_CHOOSE);
  }
}
