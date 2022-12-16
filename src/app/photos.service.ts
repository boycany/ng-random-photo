import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto() {
    return this.http
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID Qh1_x4Ld10OgspDQRvGp4dnWtYE2He95Y5SGBUb9vkw',
        },
      })
      .pipe(map((response) => response?.urls.regular));
  }
}

/*

https://api.unsplash.com/

Authorization: Client-ID YOUR_ACCESS_KEY

https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY

*/
