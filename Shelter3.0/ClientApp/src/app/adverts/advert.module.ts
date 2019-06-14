import { NgModule } from '@angular/core';


import { RouterModule } from '@angular/router';
import { AdvertListComponent } from './advert-list.component';
import { AdvertDetailsComponent } from './advert-details/advert-details.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      { path: 'adverts', component: AdvertListComponent },
      { path: 'adverts/advert/:id', component: AdvertDetailsComponent }
    ])
  ],
  declarations: [
    AdvertListComponent,
    AdvertDetailsComponent
 
  ]
})
export class AdvertModule { }
