import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { AdvertListComponent } from './adverts/advert-list.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';
import { AdvertDetailsComponent } from './adverts/advert-details/advert-details.component';
import { AppRoutingModule } from './app-routing.module';
import { AdvertModule } from './adverts/advert.module';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    AdvertModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    PageNotFoundComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
