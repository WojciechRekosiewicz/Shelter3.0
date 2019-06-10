import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advert } from "src/app/shared/advert";
import { Observable, Subscription } from 'rxjs';
import { ParamMap, ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../shared/dataService';


@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit, OnDestroy {


  public id: number;
  public advert: Advert;
  //private sub: any;

  //ngOnInit() {
  //  this.sub = this.route.params.subscribe(params => {
  //    this.id = +params['id']; // (+) converts string 'id' to a number

  //    // In a real app: dispatch action to load the details here.
  //  });
  //}

  //ngOnDestroy() {
  //  this.sub.unsubscribe();
  //}
  private routeSub: Subscription;
  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id   
      this.id = params['id'];
      console.log(this.id);
    });
  }

  



  //public advert: Observable<Advert>;

  
  //constructor(
  //  private route: ActivatedRoute,
  //  private router: Router,
  //  private service: DataService
  //) { }

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, private route: ActivatedRoute) {  
    http.get<Advert>(baseUrl + 'api/Adverts/' + this.id).subscribe(result => {
      this.advert = result;
    }, error => console.error(error));
    console.log(this.id);
    
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }

 


  //ngOnInit(): {
  //      this.advert = this.route.paramMap.pipe(
  //    switchMap((params: ParamMap) =>
  //          this.DataService.getAdvert(params.get('advertId')))
  //  );
  //}

  //gotoAdvert(advert: Advert) {
  //let advertId = advert ? advert.advertId: null;
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
