import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class GifService {

  // Webtask Call
  api_url = 'https://wt-1bbcd76db93ae3dc0aebda3869407160-0.run.webtask.io/GifApp';

  constructor(private http: HttpClient) { }

  // Retrieve random GIF
  getRandom(): Observable<any> {
      return this.http.get(this.api_url + "/random");
  }

  // Save the random GIF
  save(id: string, url: string, caption: string): Observable<any> {
      return this.http.post(this.api_url, {
          id: id,
          url: url,
          caption: caption,
          votes: 0
      });
  }

  getClash(): Observable<any> {
      return this.http.get(this.api_url + "/versus");
  }
  //
  vote(id) {
      return this.http.post(this.api_url + "/vote", {
          id: id
      });
  }
  //
  getLeaderboard() {
      
  }


}
