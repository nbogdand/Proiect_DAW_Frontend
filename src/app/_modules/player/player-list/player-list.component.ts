import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/_modules/player/_models/player';
import { PlayerService } from 'src/app/_modules/player/_services/player.service';
import { AlertifyService } from '../../../_services/alertify.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private playerService: PlayerService,
    private alertify: AlertifyService
  ) { }

  ngOnInit() {
    this.loadPlayers();
  }

  loadPlayers() {
    this.playerService.getPlayers().subscribe((players: Player[]) => {
      this.players = players;
      console.log(players);
    }, error => {
      this.alertify.error(error, () => {});
    })
  }
}