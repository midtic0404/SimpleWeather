import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-add-weather',
  templateUrl: './add-weather.component.html',
  styleUrls: ['./add-weather.component.css']
})
export class AddWeatherComponent implements OnInit {
  @ViewChild('cityNameInput') cityNameRef : ElementRef;
  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }

  onAddWeather(){
    const newCityName = this.cityNameRef.nativeElement.value;
    if(newCityName){
      this.weatherService.addNewWeather(newCityName);
      this.cityNameRef.nativeElement.value = '';
    }
  }

}
