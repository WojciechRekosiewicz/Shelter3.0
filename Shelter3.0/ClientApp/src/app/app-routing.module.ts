import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { AdvertListComponent } from './adverts/advert-list.component';
import { AdvertDetailsComponent } from './adverts/advert-details/advert-details.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';





@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      //{ path: 'adverts', component: AdvertListComponent },
      //{ path: 'adverts/advert/:id', component: AdvertDetailsComponent },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
