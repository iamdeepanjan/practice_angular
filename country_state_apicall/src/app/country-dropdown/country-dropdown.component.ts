import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-country-dropdown',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './country-dropdown.component.html',
  styleUrl: './country-dropdown.component.css'
})
export class CountryDropdownComponent implements OnInit {
  
  countries:any[] = [];
  country:string = "";
  // @Output()
  // selectedCountry = new EventEmitter<string>();
  
  private locationService = inject(LocationService);

  ngOnInit(): void {
    this.locationService.getCountries().subscribe(data => this.countries=data);
  }

  onCountryChange(country:string){
    console.log(country);
    // this.selectedCountry.emit(country);
    this.locationService.setSelectedCountry(country);
  }
}
