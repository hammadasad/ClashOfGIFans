import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-battle',
  templateUrl: './battle.component.html',
  styleUrls: ['./battle.component.scss']
})
export class BattleComponent implements OnInit {
  clashingGIFs: Array<any>;

  constructor(private gifService: GifService) { }

  // Retrieve new pair of GIFs
  getGIFs() {
    this.gifService.getClash().subscribe(gifs => {
        this.clashingGIFs = gifs;
    })
  }

  // On Page Load
  ngOnInit() {
      this.getGIFs();
  }

  // When vote button is pressed on this page
  voteGIF(id) {
      this.gifService.vote(id).subscribe(data => {
          this.getGIFs();
      });
  }

}
