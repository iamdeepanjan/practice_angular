import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountryDropdownComponent } from './country-dropdown/country-dropdown.component';
import { StateDropdownComponent } from "./state-dropdown/state-dropdown.component";
import { CityDropdownComponent } from './city-dropdown/city-dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CountryDropdownComponent, StateDropdownComponent, CityDropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'country_state_apicall';
  country:string = "";
  state:string = "";
  city:string = "";

  onCountrySelected(iso2:string){
    this.country = iso2;
  }

  onStateSelected(iso2:string){
    this.state = iso2;
  }

  onCitySelected(name:string){
    this.city = name;
  }

}
