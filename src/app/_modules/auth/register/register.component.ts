import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from 'src/app/_modules/shared/shared/services/alertify.service';
import { AuthState } from '../_models/auth.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output("changeState") changeState: EventEmitter<AuthState> = new EventEmitter<AuthState>();

  model: any = {};

  constructor(
    private authService: AuthService,
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {

      this.authService.login(
        {
          username: this.model.username,
          password: this.model.password
        }
      ).subscribe(() => {
        this.alertify.success("Registration successful");
        this.router.navigate(['/player']);

      })
    
    }, error => {
      this.alertify.error(error, () => { });
    })
  }

  cancel() {
    this.changeState.emit(AuthState.AUTH_CHOOSE);
  }
}
