import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerComponent } from './player/player.component';
import { TeamComponent } from './team/team.component';
import { TournamentComponent } from './tournament/tournament.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'player', component: PlayerComponent },
            { path: 'team', component: TeamComponent },
            { path: 'tournament', component: TournamentComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
