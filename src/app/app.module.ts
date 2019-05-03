import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { AddWeatherComponent } from './add-weather/add-weather.component';
import { WeatherService } from './weather.service';
import { WeatherItemComponent } from './weather-list/weather-item/weather-item.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherListComponent,
    AddWeatherComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
