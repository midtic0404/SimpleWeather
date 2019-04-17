import { Injectable} from '@angular/core';
import { Weather } from './weather-list/weather.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WeatherService {
  newWeatherAdded = new Subject<Weather[]>();

  weathers: Weather[] = [
    new Weather('Taipei', 'Sunny', 'It is looking good out there!'),
    new Weather('SLC', 'Snowing', 'Be careful drinving, please drive safe'),
    new Weather('London', 'Cloudy', 'Today is cloudy, expecting some suns tomorrow')
  ];

  constructor() { }

  getWeathers() {
    return this.weathers.slice();
  }

  addNewWeather(newWeather: Weather) {
    this.weathers.push(newWeather);
    this.newWeatherAdded.next(this.weathers.slice());
  }

}
