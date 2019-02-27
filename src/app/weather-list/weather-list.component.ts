import { Component, OnInit } from '@angular/core';
import { Weather } from './weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weathers: Weather[];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.weathers = this.weatherService.getWeathers();
    this.weatherService.newWeatherAdded.subscribe(
      (weathers: Weather[]) => {
        this.weathers = weathers;
      }
    );
  }


}
