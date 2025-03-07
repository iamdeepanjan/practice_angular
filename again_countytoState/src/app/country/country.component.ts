import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-country',
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent implements OnInit {
  constructor(private locationService: LocationService) { }

  countries: any[] = [];

  ngOnInit() {
    this.locationService.getCountries().subscribe((data) => {
      this.countries = data;
    });
  }

  onChangeSelectCountry(event: Event) {
    const iso2 = (event.target as HTMLSelectElement).value;
    console.log(iso2);
    this.locationService.selectCountry(iso2);
  }  
}
