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

  displayedColumns: string[] = ['name', 'matchesPlayed', 'role', 'birthdate', 'actions'];
  players: Player[] = []
  name = 'Angular';
  enableEdit = false;
  enableEditIndex: number = -1;

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
    this.playerService
      .getTeamPlayers(this.activatedRoute.snapshot.params.id)
      .subscribe((players: Player[]) => {
        this.players = players
      }, error => {
        this.alertifyService.error(error, () => { })
      })
  }

  onAddPlayer() {
    this.router.navigate(
      ['/player/add'], {
      state: {
        data: {
          teamId: this.activatedRoute.snapshot.params.id
        }
      }
    });
  }

  onEdit(id: string) {
    this.router.navigate(['/player/' + id]);
  }

  onDelete(id: string) {
    this.playerService.deletePlayer(id).subscribe((wasSuccessful) => {
      this.alertifyService.success("Player Deleted!");
    }, error => {
      this.alertifyService.error(error, () => { });
    })
  }
}
