import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PlayerService } from '../player/_services/player.service';
import { Player } from '../player/_models/player';
import { AlertifyService } from '../shared/shared/services/alertify.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  displayedColumns: string[] = ['name', 'matchesPlayed', 'role', 'birthdate'];

  players: Player[] = []

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit() {
    this.getTeamPlayers();
  }

  getTeamPlayers() {
    this.playerService.getTeamPlayers(this.activatedRoute.snapshot.params.id).subscribe((players: Player[])=> {
      this.players = players
    }, error => {
      this.alertifyService.error(error, () => {})
    })
  }
}
