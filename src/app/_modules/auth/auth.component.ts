import { Component, OnInit } from '@angular/core';
import { AuthState } from 'src/app/_modules/auth/_models/auth.state';

// enum AuthState {
//   AUTH_CHOOSE,
//   AUTH_LOGIN,
//   AUTH_REGISTER,
//   AUTH_FINISHED,
// }

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  private authState: AuthState = AuthState.AUTH_CHOOSE;

  constructor() { }

  ngOnInit() {
  }

  toggleRegister() {
    this.authState = AuthState.AUTH_REGISTER;
  }

  toggleLogin() {
    this.authState = AuthState.AUTH_LOGIN;
  }

  toggleChoose() {
    this.authState == AuthState.AUTH_CHOOSE;
  }

  isRegisterState() {
    return this.authState == AuthState.AUTH_REGISTER;
  }

  isLoginState() {
    return this.authState == AuthState.AUTH_LOGIN;
  }

  isChooseState() {
    return this.authState == AuthState.AUTH_CHOOSE;
  }

  changeAuthState(authState: AuthState) {
    this.authState = authState;
  }
}
