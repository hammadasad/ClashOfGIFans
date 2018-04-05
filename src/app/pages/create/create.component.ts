import { Component, OnInit } from '@angular/core';

import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  random_gif;
  caption = "";

  constructor(private gifService: GifService ) { }

  ngOnInit() {
      this.gifService.getRandom().subscribe(gif => {
              this.random_gif = gif;
      })
  }

  // Saving the GIF action
  saveGif() {
      this.gifService.save(this.random_gif.id, this.random_gif.url, this.caption)
          .subscribe(data => {
            // reload the GIF
            this.gifService.getRandom().subscribe(gif => {
                    this.random_gif = gif;
            })
            // Clear the caption
            this.caption = "";
            // Show notification
          });
  }

}
