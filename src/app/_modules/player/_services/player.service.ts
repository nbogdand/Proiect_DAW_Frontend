import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../_models/player';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  baseUrl = environment.apiUrl;
  url = 'https://localhost:44340/api/';

  constructor(
    private http: HttpClient
  ) { }

  getPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(this.url + 'players/');
  }

  getTeamPlayers(teamId: string): Observable<Player[]> {
    let params = new HttpParams().set('teamId', teamId);
    return this.http.get<Player[]>(this.url + 'players', { params: params });
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(this.url + 'players/' + id);
  }

  addPlayer(player: Player, teamId: string) {
    return this.http.post<Player>(this.url + 'players', {
      name: player.name,
      matchesPlayed: player.matchesPlayed,
      role: player.role,
      birthdate: player.birthdate,
      teamId: teamId
    });
  }

  updatePlayer(player: Player) {
    return this.http.put<Player>(this.url + 'players', player);
  }

  deletePlayer(playerId: string) {
    let options = { 
      headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
      body: {
        'playerId': playerId
      }
    };
    return this.http.delete<Boolean>(this.url + 'players/' + playerId);
  }
}
