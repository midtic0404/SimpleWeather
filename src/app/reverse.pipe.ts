import { Pipe, PipeTransform } from '@angular/core';
import { Weather } from './weather-list/weather.model';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: Weather[]): Weather[] {
    return [...value].reverse();
  }

}
