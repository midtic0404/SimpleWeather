export class Weather {
  public cityName: string;
  public weatherDescription: string;

  constructor(name: string, desc: string) {
    this.cityName = name;
    this.weatherDescription = desc;
  }
}
