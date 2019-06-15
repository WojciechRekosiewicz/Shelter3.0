import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Advert } from '../advert';
import { AdvertService } from '../advert.service';



@Component({
  selector: 'advert-details',
  templateUrl: './advert-details.component.html',
  styleUrls: ['./advert-details.component.css']
})
export class AdvertDetailsComponent implements OnInit {

  pageTitle = 'Advert Detail';
  advert: Advert;
  errorMessage: string;


  constructor(private advertService: AdvertService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('advertId');
    this.getAdvert(id);
  }

  getAdvert(id: number) {
    this.advertService.getAdvert(id).subscribe(
      product => this.onAdvertRetrieved(product),
      error => this.errorMessage = <any>error);
  }

  onAdvertRetrieved(advert: Advert): void {
    this.advert = advert;

    if (this.advert) {
      this.pageTitle = `Product Detail: ${this.advert.title}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {  
  //  http.get<Advert>(baseUrl + 'api/Adverts/7').subscribe(result => {
  //    this.advert = result;
  //  }, error => console.error(error));
  //  console.log(this.id); 
  //}


}
