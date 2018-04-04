import { Component, OnInit } from '@angular/core';

import { GifService } from '@app/core/services/gif.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  random_gif;

  constructor(private gifService: GifService ) { }

  ngOnInit() {
      this.gifService.getRandom().subscribe(gif => {
              this.random_gif = gif;
      })
  }

}
