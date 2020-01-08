import { Component, OnInit, Input } from '@angular/core';
import { Weather } from '../weather.model';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  @Input() weather: Weather;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  removeWeather() {
    this.weatherService.removeWeather(this.weather.cityName);
  }

}
