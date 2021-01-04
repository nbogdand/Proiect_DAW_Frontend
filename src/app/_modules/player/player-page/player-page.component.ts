import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AlertifyService } from '../../shared/shared/services/alertify.service';
import { PlayerService } from '../_services/player.service';
import { ActivatedRoute } from '@angular/router';
import { Player } from '../_models/player';
import { Location } from '@angular/common';

export enum PageState {
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
  date: any = {};
  pageState: PageState = PageState.PLAYER_UPDATE;

  constructor(
    private playerService: PlayerService,
    private activatedRoute: ActivatedRoute,
    private alertify: AlertifyService,
    private localtion: Location
  ) { }

  ngOnInit() {
    this.getPageState();
    this.getPlayer();
  }

  getPageState() {
    if (this.activatedRoute.snapshot.params.id === 'add') {
      this.pageState = PageState.PLAYER_ADD;
    } else {
      this.pageState = PageState.PLAYER_UPDATE;
    }
  }

  getPlayer() {
    if (this.pageState == PageState.PLAYER_ADD) {
      return;
    }

    this.playerService.getPlayer(this.activatedRoute.snapshot.params.id).subscribe((player: Player) => {
      this.player = player;
    }, error => {
      this.alertify.error(error, () => { });
    })
  }

  submitChanges() {
    console.log(this.player);

    switch (this.pageState) {
      case PageState.PLAYER_ADD: {
        this.addPlayer();
        break;
      }
      case PageState.PLAYER_UPDATE: {
        this.updatePlayer();
        break;
      }
    }
  }

  addPlayer() {
    console.log("addPlayer()", history.state.data);
    this.playerService.addPlayer(this.player, history.state.data.teamId)
      .subscribe((player: Player) => {
        this.alertify.success("Player Added");
        this.onGoBack();
      }, (error) => {
        this.alertify.error(error, () => { });
      })
  }

  updatePlayer() {
    this.playerService.updatePlayer(this.player).subscribe((player: Player) => {
      console.log(player);
      this.alertify.success("Player Updated");
      this.onGoBack();
    }, (error) => {
      this.alertify.error(error, () => { });
    })
  }

  updateDate(dateObject: any) {
    const stringified = JSON.stringify(dateObject.value);
    const dob = stringified.substring(1, 11);
    console.log(new Date(dob).getTime());
    this.player.birthdate = new Date(dob).getTime() / 1000;
  }

  onGoBack() {
    this.localtion.back();
  }
}
