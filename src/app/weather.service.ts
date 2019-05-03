import { Injectable} from '@angular/core';

import { Weather } from './weather-list/weather.model';
import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';

@Injectable()
export class WeatherService {
  newWeatherAdded = new Subject<Weather[]>();

  weathers: Weather[] = [
    
  ];

  constructor(private http: Http) { }

  getWeathers() {
    return this.weathers.slice();
  }

  getNewWeatherData(newCityName: string) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=7949b0e330b90aaf80502f5edff4e2d4`;
    return this.http.get(url);   
  }

  addNewWeather(newWeather: Weather) {
    this.weathers.push(newWeather);
    this.newWeatherAdded.next(this.weathers.slice());
  }

}
