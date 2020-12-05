import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'src/app/_models/player';
import { Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input("player") player!: Player;

  randomImageIndex() {
    return Math.floor(Math.random() * Math.floor(3));
  }

  // imageResource = require("../../../../src/assets/images/avatar_${randomImageIndex}.png")
  // imageResource: Subject<string> = new BehaviorSubject("")

  constructor() { }

  ngOnInit() {
  }

 
}
