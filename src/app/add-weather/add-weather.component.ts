import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-weather',
  templateUrl: './add-weather.component.html',
  styleUrls: ['./add-weather.component.css']
})
export class AddWeatherComponent implements OnInit {
  @ViewChild('cityNameInput') cityNameRef : ElementRef;
  constructor(private weatherService: WeatherService,
              private router: Router) { }

  ngOnInit() {
  }

  onAddWeather(){
    const newCityName = this.cityNameRef.nativeElement.value;
    if(newCityName){
      this.weatherService.addNewWeather(newCityName);
      this.cityNameRef.nativeElement.value = '';
      this.router.navigate(['/weathers']);
    }
  }

}
