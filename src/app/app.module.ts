import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeaderSliderComponent } from './components/header-slider/header-slider.component';
import { WhatWeDoComponent } from './components/what-we-do/what-we-do.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { StrategyComponent } from './components/strategy/strategy.component';
import { RecentWorksComponent } from './components/recent-works/recent-works.component';
import { OurValuesComponent } from './components/our-values/our-values.component';
import { ClientsReviewsComponent } from './components/clients-reviews/clients-reviews.component';
import { GetInTouchComponent } from './components/get-in-touch/get-in-touch.component';
import { CarouselComponent } from './components/header-slider/carousel/carousel.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderSliderComponent,
    WhatWeDoComponent,
    OurServicesComponent,
    StrategyComponent,
    RecentWorksComponent,
    OurValuesComponent,
    ClientsReviewsComponent,
    GetInTouchComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
