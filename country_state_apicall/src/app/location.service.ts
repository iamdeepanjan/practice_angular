import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private apiURL = "https://api.countrystatecity.in/v1";
  private apiKey = "VzlMOGpxV1VvTThiVTZESWc5SW9zaFdRMkhKYW45TUphakZuRUZHSg=="
  private http = inject(HttpClient);

  constructor() { }

  //Set api key in the header of the request
  private getHeader():HttpHeaders{
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSCAPI-KEY': this.apiKey
    });
  }

  //Fetch all countries
  getCountries():Observable<any>{
    return this.http.get<any>(`${this.apiURL}/countries`, {headers: this.getHeader()});
  }

  //Fetch all states based on selected country
  getStates(iso2:string):Observable<any>{
    return this.http.get<any>(`${this.apiURL}/countries/${iso2}/states`,{headers: this.getHeader()});
  }

  //Fetch all cities based on selected state
  getCities(cIso2:string, sIso2:string):Observable<any>{
    return this.http.get<any>(`${this.apiURL}/countries/${cIso2}/states/${sIso2}/cities`, {headers: this.getHeader()});
  }
}
