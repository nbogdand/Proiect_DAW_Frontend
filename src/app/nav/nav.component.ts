import { Component, OnInit } from '@angular/core';
import { AlertifyService } from 'src/app/_modules/shared/shared/services/alertify.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(
    private alertify: AlertifyService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.success("Logged out");
    this.router.navigate(['/home']);
  }
}
