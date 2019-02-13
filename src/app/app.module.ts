import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { WeatherItemComponent } from './weather-list/weather-item/weather-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WeatherListComponent,
    WeatherItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
