import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/_modules/player/_models/player';
import { PlayerService } from 'src/app/_modules/player/_services/player.service';
import { AlertifyService } from 'src/app/_modules/shared/shared/services/alertify.service';
import { MessagingService } from '../../shared/shared/services/messaging.service';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Player[] = [];

  constructor(
    private playerService: PlayerService,
    private alertify: AlertifyService,
    private messagingService: MessagingService
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

  onNotifyClick() {
    console.log('onNotifyClick()');
    this.messagingService.requestPermission("bogdan");
  }
}
