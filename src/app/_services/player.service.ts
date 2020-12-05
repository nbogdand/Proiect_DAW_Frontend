import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from '../_models/player';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({
    'Autorization': '' + localStorage.getItem('token')
  })
};

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
    return this.http.get<Player[]>(this.url + 'players/', httpOptions);
    // return this.http.get<Player[]>(this.url + 'players/');
  }

  getPlayer(id: string): Observable<Player> {
    return this.http.get<Player>(this.url + 'players/' + id, httpOptions);
    // return this.http.get<Player>(this.url + 'players/' + id);
  }
}
