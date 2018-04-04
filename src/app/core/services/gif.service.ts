import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class GifService {

  // Webtask Call
  api_url = 'https://wt-1bbcd76db93ae3dc0aebda3869407160-0.run.webtask.io/GifApp';

  constructor(private http: HttpClient) { }

  // Retrieve random GIF
  getRandom() {
      return this.http.get(this.api_url + "/random");
  }

  // Save the random GIF
  save() {

  }

  getClash() {

  }

  vote(id) {

  }

  getLeaderboard() {

  }


}
