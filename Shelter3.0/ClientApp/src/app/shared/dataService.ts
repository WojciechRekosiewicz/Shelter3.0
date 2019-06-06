//import { HttpClient } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Advert } from './advert';


@Injectable()
export class DataService {

    constructor(private http: HttpClient) {
    }

    public adverts: Advert[] = [];

    loadAdrverts(): Observable<boolean> {
        return this.http.get("https://localhost:44340/api/Adverts")
            .pipe(
                map((data: any[]) => {
                    this.adverts = data;
                    return true;
                }));           
    }


}