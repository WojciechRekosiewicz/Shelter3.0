import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public adverts: Advert[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Advert[]>(baseUrl + 'api/Adverts').subscribe(result => {
      this.adverts = result;
    }, error => console.error(error));
  }
}

interface Advert {
  advertId: number;
  title: string;
  authorId: string;
  reservingId: string;
  shortDescription: string;
  longDescription: string;
  imageUrl: string;
  authorUser?: any;
  reservingUser?: any;
}
