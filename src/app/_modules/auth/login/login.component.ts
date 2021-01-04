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
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success("Logged in success");
      this.router.navigate(['/player']);
    }, error => {
      this.alertify.error("Failed to login", () => { });
    })
  }

  cancel() {
    this.changeState.emit(AuthState.AUTH_CHOOSE);
  }
}
