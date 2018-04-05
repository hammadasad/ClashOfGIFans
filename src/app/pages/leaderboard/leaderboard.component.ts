import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboardGIFs: Array<any>;

  constructor(private gifService: GifService) { }

  ngOnInit() {
      this.gifService.getLeaderboard()
          .subscribe(data => {
            this.leaderboardGIFs = data;
          });
  }

}
