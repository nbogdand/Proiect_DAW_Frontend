import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule, 
  ],
  declarations: [TeamComponent]
})
export class TeamModule { }
