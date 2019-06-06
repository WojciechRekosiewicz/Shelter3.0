import { Component, OnInit } from "@angular/core";
import { DataService } from '../shared/dataService';
import { Advert } from "../shared/advert";



@Component({
    selector: "advert-list",
    templateUrl: "advertList.component.html",
    styleUrls: ["advertList.component.css"]
})
export class AdvertList implements OnInit {

    constructor(private data: DataService) {
        
    }


    public adverts: Advert[] = [];

    ngOnInit() {
        this.data.loadAdrverts()
            .subscribe(() => this.adverts = this.data.adverts);
    }

//    ngOnInit(): void {
//    this.data.loadAdrverts()
//        .subscribe(success => {
//            if (success) {
//                this.adverts = this.data.adverts;
//            }
//        });
//}
}

