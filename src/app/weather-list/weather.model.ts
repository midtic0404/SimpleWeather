export class Weather {
  public cityName: string;
  public weatherMainStatus: string;
  public weatherDescription: string;

  constructor(name: string, status: string, desc: string) {
    this.cityName = name;
    this.weatherMainStatus = status;
    this.weatherDescription = desc;
  }
}
