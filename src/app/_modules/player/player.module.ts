import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { PlayerCardComponent } from './player-card/player-card.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { DateConverterPipe } from './_pipes/date-converter.pipe';
import { AgePipe } from './_pipes/age.pipe';
import { SharedModule } from '../shared/shared/shared.module';
 
@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    PlayerComponent,
    PlayerListComponent,
    PlayerCardComponent,

    DateConverterPipe,
    AgePipe,
  ]
})
export class PlayerModule { }
