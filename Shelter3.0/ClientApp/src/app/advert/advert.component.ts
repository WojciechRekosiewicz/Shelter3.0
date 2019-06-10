import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from "src/app/shared/advert";
import { Observable } from 'rxjs';
import { ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent {


  public advert: Observable<Advert>;

  //ngOnInit(): {
  //      this.advert = this.route.paramMap.pipe(
  //    switchMap((params: ParamMap) =>
  //      this.service.getHero(params.get('advert.id')))
  //  );
  //}

  //gotoAdvert(advert: Advert) {
  //  let advertId = advert ? advert.id : null;
  //  // Pass along the hero id if available
  //  // so that the HeroList component can select that hero.
  //// Include a junk 'foo' property for fun.
  //    this.router.navigate(['/adverts/advert', { id: advertId, foo: 'foo' }]);
  //}
  

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<Advert[]>(baseUrl + 'api/Adverts').subscribe(result => {
  //    this.adverts = result;
  //  }, error => console.error(error));
  //}
}
