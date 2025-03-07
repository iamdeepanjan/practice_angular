import { Component } from '@angular/core';
import { CountryComponent } from './country/country.component';
import { StateComponent } from './state/state.component';
import { CityComponent } from './city/city.component';
import { LocationService } from './location.service';

@Component({
  selector: 'app-root',
  imports: [CountryComponent, StateComponent, CityComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'again_countytoState';

  constructor(private locationService: LocationService) { }

  country: string = '';
  state: string = '';
  city: string = '';

  ngOnInit() {
    this.locationService.getSelectedCountry().subscribe((country) => {
      this.country = country || '';
    });
    this.locationService.getSelectedState().subscribe((state) => {
      this.state = state || '';
    });
    this.locationService.getSelectedCity().subscribe((city) => {
      this.city = city || '';
    });
  }

  
}
