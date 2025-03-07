import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  
  private http = inject(HttpClient);
  private apiURL = "https://api.countrystatecity.in/v1";
  private apiKey = "VzlMOGpxV1VvTThiVTZESWc5SW9zaFdRMkhKYW45TUphakZuRUZHSg==";

  private selectedCountry = new BehaviorSubject<string|null>(null);
  private selectedState = new BehaviorSubject<string|null>(null);
  private selectedCity = new BehaviorSubject<string|null>(null);

  private getHeader():HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSCAPI-KEY': this.apiKey
    });
  }

  getCountries(): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/countries`, {headers: this.getHeader()});
  }

  getStates(iso2:string): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/countries/${iso2}/states`,{headers: this.getHeader()});
  }

  getCities(cIso2:string, sIso2:string): Observable<any>{
    return this.http.get<any>(`${this.apiURL}/countries/${cIso2}/states/${sIso2}/cities`, {headers: this.getHeader()});
  }

  selectCountry(cIso2:string){
    this.selectedCountry.next(cIso2);
  }
  getSelectedCountry(): Observable<string|null>{
    return this.selectedCountry.asObservable();
  }
  selectState(sIso2:string){
    this.selectedState.next(sIso2);
  }
  getSelectedState(): Observable<string|null>{
    return this.selectedState.asObservable();
  }
  selectCity(city:string){  
    this.selectedCity.next(city);
  }
  getSelectedCity(): Observable<string|null>{
    return this.selectedCity.asObservable();
  }
}
