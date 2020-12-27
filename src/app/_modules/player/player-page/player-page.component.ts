import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertifyService } from '../../shared/shared/services/alertify.service';
import { PlayerService } from '../_services/player.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../_models/player';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';

enum PageState {
  PLAYER_UPDATE,
  PLAYER_ADD
}

@Component({
  selector: 'app-player-page',
  templateUrl: './player-page.component.html',
  styleUrls: ['./player-page.component.css']
})
export class PlayerPageComponent implements OnInit {

  player: any = {};
  model: NgbDateStruct = { year: 0, month: 0, day: 0};
  date: any = {}
  initialDate: any = {}
  pageState: PageState = PageState.PLAYER_UPDATE;

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private localtion: Location
  ) { }

  ngOnInit() {
    this.getPlayer();
  }

  getPageState() {
    if (this.activatedRoute.snapshot.params.id == 'add'){
      this.pageState = PageState.PLAYER_ADD;
    } else {
      this.pageState = PageState.PLAYER_UPDATE;
    }
  }

  getPlayer() {
    if (this.pageState == PageState.PLAYER_ADD) return

    this.playerService.getPlayer(this.activatedRoute.snapshot.params.id).subscribe((player: Player) => {
      this.player = player;
      this.date = "21/10/1998";
      this.initialDate = Date.parse(player.birthdate);
    }, error => {
      this.alertify.error(error, () => { });
    })
  }

  submitChanges() {
    console.log(this.player);
    console.log(Date.parse(this.date));

    this.playerService.updatePlayer(this.player).subscribe((player: Player) => {
      console.log(player);
      this.alertify.success("Player Updated");
      this.onGoBack();
    }, (error) => {
      this.alertify.error(error, () => {});
    })
  }

  onGoBack() {
    this.localtion.back();
  }
}
