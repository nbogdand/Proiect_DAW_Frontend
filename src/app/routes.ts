import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TournamentComponent } from './tournament/tournament.component';

export const appRoutes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'player', component: PlayerComponent},
    { path: 'team', component: TeamComponent},
    { path: 'tournament', component: TournamentComponent},
    { path: '**', redirectTo: 'home', pathMatch: 'full'},
];
