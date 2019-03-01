import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { Weather } from '../weather-list/weather.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-weather',
  templateUrl: './add-weather.component.html',
  styleUrls: ['./add-weather.component.css']
})
export class AddWeatherComponent implements OnInit {
  @ViewChild('f') weatherForm: NgForm;
  constructor(private weatherService: WeatherService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newCityName = form.value.cityName;
    const newWeather = new Weather(newCityName, 'Test Status', 'This is a test description');
    this.weatherService.addNewWeather(newWeather);
    form.reset();
    this.router.navigate(['/weathers']);
  }

}
