import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Weather } from '../weather-list/weather.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-weather',
  templateUrl: './add-weather.component.html',
  styleUrls: ['./add-weather.component.css']
})
export class AddWeatherComponent implements OnInit {

  haveError = false;
  errorCityName = '';
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newCityName = form.value.cityName;
    this.weatherService.getNewWeatherData(newCityName)
      .subscribe(
        (data) => {
          this.haveError = false;
          const weatherDesc = data['weather'][0].description;
          const newWeather = new Weather(newCityName, weatherDesc);
          this.weatherService.addNewWeather(newWeather);
          form.reset();
        },
        () => {
          this.haveError = true;
          this.errorCityName = newCityName;
          form.reset();
        }
      )
  }

}




