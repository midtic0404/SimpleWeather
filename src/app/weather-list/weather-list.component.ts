import { Component, OnInit, OnDestroy } from '@angular/core';
import { Weather } from './weather.model';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-weather-list',
  templateUrl: './weather-list.component.html',
  styleUrls: ['./weather-list.component.css']
})
export class WeatherListComponent implements OnInit, OnDestroy {
  listSubscription: Subscription;

  weathers: Weather[] = [];

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.listSubscription  = this.weatherService.newWeathers.subscribe(
      (weathers: Weather[]) => {
        this.weathers = weathers;
      }
    );
  }

  ngOnDestroy() {
    this.listSubscription.unsubscribe();
  }


}
