import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from "src/app/shared/advert";

@Component({
  selector: 'app-adverts',
  templateUrl: './adverts.component.html',
  styleUrls: ['./adverts.component.css']
})
export class AdvertsComponent {
  public adverts: Advert[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Advert[]>(baseUrl + 'api/Adverts').subscribe(result => {
      this.adverts = result;
    }, error => console.error(error));
  }
}
