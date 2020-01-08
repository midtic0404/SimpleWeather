import { Injectable} from '@angular/core';

import { Weather } from './weather-list/weather.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable()
export class WeatherService {
  newWeatherAdded = new Subject<Weather[]>();
  weathers: Weather[] = [];
  constructor(private http: HttpClient) { }

  getNewWeatherData(newCityName: string) {
    const url = `//api.openweathermap.org/data/2.5/weather?q=${newCityName}&appid=` + environment.weatherApiKey;
    return this.http.get(url);
  }

  nameIsDuplicated(newCityName: string) {
    return this.weathers.find((weather) => {
      return weather.cityName === newCityName;
    });
  }

  addNewWeather(newWeather: Weather) {
    this.weathers.push(newWeather);
    this.newWeatherAdded.next([...this.weathers]);
  }

}
