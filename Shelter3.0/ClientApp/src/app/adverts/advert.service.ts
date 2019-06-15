//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';
import { Advert } from './advert';


@Injectable({
  providedIn: 'root'
})
export class AdvertService {

    constructor(private http: HttpClient ) {}

  private advertsUrl = 'https://localhost:44378/api/Adverts';
  public adverts: Advert[] = [];


  //  loadAdverts(): Observable<boolean> {
  //    return this.http.get("https://localhost:44378/api/Adverts")
  //          .pipe(
  //              map((data: any[]) => {
  //                  this.adverts = data;
  //                  return true;
  //              }));           
  //}

  //getAdvert(id: number | string) {
  //  return this.loadAdverts().pipe(
  //    // (+) before `id` turns the string into a number
  //    map((adverts: Advert[]) => adverts.find(advert => advert.advertId === +advert.advertId))
  //  );
  //}


  getAdverts(): Observable<Advert[]> {
    return this.http.get<Advert[]>(this.advertsUrl)
      .pipe(
        tap(data => console.log(JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  getAdvert(id: number): Observable<Advert> {
    const url = `${this.advertsUrl}/${id}`;
    return this.http.get<Advert>(url)
      .pipe(
      tap(data => console.log('getAdvert: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  private handleError(err) {
  // we may send the server to some remote logging infrastructure
  // instead of just logging it to the console
  let errorMessage: string;
  if (err.error instanceof ErrorEvent) {
    // A client-side or network error occurred. Handle it accordingly.
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
    errorMessage = `Backend returned code ${err.status}: ${err.body.error}`;
  }
  console.error(err);
  return throwError(errorMessage);
}

}
