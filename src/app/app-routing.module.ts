import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherListComponent } from './weather-list/weather-list.component';
import { AddWeatherComponent } from './add-weather/add-weather.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/weathers' },
  { path: 'weathers', component: WeatherListComponent },
  { path: 'add', component: AddWeatherComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class AppRoutingModule { }
