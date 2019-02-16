import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { AddWeatherComponent } from './add-weather/add-weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherListComponent,
    AddWeatherComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
