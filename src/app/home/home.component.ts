import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  authMode = false;

  constructor() { }

  ngOnInit() {
  }

  registerToggle() {
    this.authMode = true;
  }
  
  cancelRegisterMode(registerMode: boolean) {
    this.authMode = registerMode;
  }

}
