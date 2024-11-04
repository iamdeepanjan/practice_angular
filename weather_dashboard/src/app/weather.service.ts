import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { 
    this.cityList.subscribe(cities => this.setTolocal(cities));
  }

  private city = new BehaviorSubject<string>("");
  private cityList = new BehaviorSubject<string[]>(this.getFromLocal());
  private API_KEY:string = "2256e77dbe53f76ab5cfd47397fd7d84";
  private http = inject(HttpClient);

  // https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API_KEY}
  private apiURL = `https://api.openweathermap.org/data/2.5/weather?q=`

  getWeatherDetails(city:string):Observable<any>{
    return this.http.get(`${this.apiURL}${city}&units=metric&appid=${this.API_KEY}`).pipe(
      catchError(error => {
        console.error('Error fetching weather data:', error);
        return throwError(() => new Error('City not found. Please try again.'))
      })
    );
  }

  getCity(){
    return this.city.asObservable();
  }

  setCity(city:string){
    this.city.next(city);
  }

  addCity(city:string){
    const history = this.cityList.getValue();
    if(!history.includes(city)){
      this.cityList.next([...this.cityList.value,city]);
    }
  }
  getCityList(){
    return this.cityList.asObservable();
  }

  getFromLocal(){
    const list = localStorage.getItem('cityList');
    return list ? JSON.parse(list) : [];
  }
  setTolocal(cityList:any[]){
    localStorage.setItem('cityList', JSON.stringify(cityList));
  }
}
