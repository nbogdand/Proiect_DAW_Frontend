import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './_modules/auth/auth.module';
import { PlayerModule } from './_modules/player/player.module';
import { RouterModule } from '@angular/router';
import { TeamModule } from './_modules/team/team.module';
import { TournamentModule } from './_modules/tournament/tournament.module';

import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';

import { appRoutes } from './routes';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    
    RouterModule.forRoot(appRoutes),
    AuthModule,
    PlayerModule,
    TeamModule,
    TournamentModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
