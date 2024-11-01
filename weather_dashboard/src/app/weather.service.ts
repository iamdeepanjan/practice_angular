import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }
  private city = new BehaviorSubject<string|null>(null);
  private cityList = new BehaviorSubject<string[]>([]);
  private API_KEY:string = "2256e77dbe53f76ab5cfd47397fd7d84";
  private http = inject(HttpClient);

  // https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
  private apiURL = `https://api.openweathermap.org/data/2.5/weather?q=`

  getWeatherDetails(city:string):Observable<any>{
    return this.http.get(`${this.apiURL}${city}&units=metric&appid=${this.API_KEY}`)
  }

  getCity(){
    return this.city.asObservable();
  }

  setCity(city:string){
    return this.city.next(city);
  }

  addCity(city:string){
    return this.cityList.next([...this.cityList.value,city]);
  }
}
