import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';
import { Weather } from '../weather-list/weather.model';
import { NgForm } from '@angular/forms';
import { Response } from '@angular/http';

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
    this.weatherService.getNewWeatherData(newCityName)
      .subscribe(
        (data) => {
          const weatherDesc = data['weather'][0].description;
          const newWeather = new Weather(newCityName, weatherDesc);
          this.weatherService.addNewWeather(newWeather);
          form.reset();
          this.router.navigate(['/weathers']);
        }
      )
  }

}




