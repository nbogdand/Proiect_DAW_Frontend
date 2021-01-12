import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tournament } from '../_models/tournament';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  baseUrl = environment.apiUrl;
  url = 'https://localhost:44340/api/';

  constructor(
    private http: HttpClient
  ) { }

  getTournaments(): Observable<Tournament[]> {
    return this.http.get<Tournament[]>(this.url + 'tournament/');
  }
}

