import { Component, OnInit } from '@angular/core';
import { Tournament, TeamInTournament } from './_models/tournament';
import { Router } from '@angular/router';
import { TournamentService } from './_services/tournament.service';
import { AlertifyService } from '../shared/shared/services/alertify.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  tournaments: Tournament[] = []
  displayedColumns: string[] = ['name', 'victories', 'draws', 'defeats'];

  constructor(
    private router: Router,
    private tournamentService: TournamentService,
    private alertifyService: AlertifyService
  ) { }

  ngOnInit() {
    this.getTournaments();
  }

  getTournaments() {
    this.tournamentService.getTournaments().subscribe((tournaments: Tournament[]) => {
      this.tournaments = tournaments;
    }, error => {
      this.alertifyService.error(error, () => {});
    })
  }

  onTeamClick(id: number) {
    this.router.navigate(['/team/' + id]);
  }

}
