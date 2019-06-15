import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from './advert';
import { AdvertService } from './advert.service';
import { ActivatedRoute } from '@angular/router';
import { error } from 'util';

@Component({
  selector: 'app-adverts',
  templateUrl: './advert-list.component.html',
  styleUrls: ['./advert-list.component.css']
})
export class AdvertListComponent implements OnInit {

  public adverts: Advert[];
  errorMessage = '';
    router: any;

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<Advert[]>(baseUrl + 'api/Adverts').subscribe(result => {
  //    this.adverts = result;
  //  }, error => console.error(error));
  //}

  constructor(private advertService: AdvertService,
    private route: ActivatedRoute) {
  }


  goToAdvertDetails(id) {
    this.router.navigate(['/adverts/advert/', id]);
  }


  ngOnInit(): void {
    this.advertService.getAdverts().subscribe(
      adverts => {
        this.adverts = adverts;
      },
      error => this.errorMessage = <any>error
    );
  }
}

