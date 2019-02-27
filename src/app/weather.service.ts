import { Injectable, EventEmitter } from '@angular/core';
import { Weather } from './weather-list/weather.model';

@Injectable()
export class WeatherService {

  newWeatherAdded = new EventEmitter<Weather[]>();

  weathers: Weather[] = [
    new Weather('Taipei', 'Sunny', 'It is looking good out there!'),
    new Weather('SLC', 'Snowing', 'Be careful drinving, please drive safe'),
    new Weather('London', 'Cloudy', 'Today is cloudy, expecting some suns tomorrow')
  ];

  constructor() { }

  getWeathers() {
    return this.weathers.slice();
  }

  addNewWeather(cityName: string) {
    this.weathers.push(
      new Weather(cityName, 'Test Status', 'Test description here')
    );

    this.newWeatherAdded.emit(this.weathers.slice());
  }

}
