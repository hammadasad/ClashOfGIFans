import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { BattleComponent } from '@app/pages/battle/battle.component';
import { CreateComponent } from '@app/pages/create/create.component';
import { LeaderboardComponent } from '@app/pages/leaderboard/leaderboard.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [BattleComponent, CreateComponent, LeaderboardComponent],
  exports: [BattleComponent, CreateComponent, LeaderboardComponent]
})
export class PagesModule { }
