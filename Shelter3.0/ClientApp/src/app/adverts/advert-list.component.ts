import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from './advert';


@Component({
  selector: 'app-adverts',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent {
  public adverts: Advert[];
    router: any;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Advert[]>(baseUrl + 'api/Adverts').subscribe(result => {
      this.adverts = result;
    }, error => console.error(error));
  }


  goToAdvertDetails(id) {
    this.router.navigate(['/adverts/advert/', id]);
  }
}

