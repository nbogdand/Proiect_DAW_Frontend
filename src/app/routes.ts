import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayerListComponent } from 'src/app/_modules/player/player-list/player-list.component';
import { TeamComponent } from 'src/app/_modules/team/team.component';
import { TournamentComponent } from 'src/app/_modules/tournament/tournament.component';
import { AuthGuard } from './_guards/auth.guard';
import { PlayerPageComponent } from './_modules/player/player-page/player-page.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'player', component: PlayerListComponent },
            { path: 'player/:id', component: PlayerPageComponent },
            { path: 'player/add', component: PlayerPageComponent },
            { path: 'team/:id', component: TeamComponent },
            { path: 'tournament', component: TournamentComponent },
        ]
    },
    { path: '**', redirectTo: '', pathMatch: 'full'},
];
