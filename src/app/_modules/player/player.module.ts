import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { AgePipe } from './_pipes/age.pipe';
import { SharedModule } from '../shared/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlayerPageComponent } from './player-page/player-page.component';
import { MatNativeDateModule, } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input'; 
import { MatDatepickerModule } from '@angular/material/datepicker';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
  ],
  declarations: [
    PlayerComponent,
    PlayerListComponent,
    PlayerCardComponent,
    PlayerPageComponent,

    AgePipe,
  ],
  exports: [
    AgePipe,
  ]
})
export class PlayerModule { }
