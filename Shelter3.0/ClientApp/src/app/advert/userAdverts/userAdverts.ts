import { Component } from '@angular/core';
import { DataService } from 'ClientApp/app/shared/dataService';


@Component({
    selector: "user-adverts",
    templateUrl: "userAdverts.component.html",
    styleUrls: []
})
export class UserAdverts {

    constructor(private data: DataService) {

    }

}