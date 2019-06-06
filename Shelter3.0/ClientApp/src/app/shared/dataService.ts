//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Advert } from './advert';


@Injectable()
export class DataService {

    constructor(private http: HttpClient ) {
  }

//  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
//    http.get<WeatherForecast[]>(baseUrl + 'api/SampleData/WeatherForecasts').subscribe(result => {
//      this.forecasts = result;
//    }, error => console.error(error));
//  }
//}

    public adverts: Advert[] = [];

    loadAdrverts(): Observable<boolean> {
      return this.http.get("https://localhost:44378/api/Adverts")
            .pipe(
                map((data: any[]) => {
                    this.adverts = data;
                    return true;
                }));           
    }


}
