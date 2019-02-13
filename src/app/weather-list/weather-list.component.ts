import { Component, OnInit } from '@angular/core';
import { Weather } from './weather.model';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit {

  weathers: Weather[] = [
    new Weather('Taipei', 'Sunny', 'It is looking good out there!')
  ];
  constructor() { }

  ngOnInit() {
  }

}
