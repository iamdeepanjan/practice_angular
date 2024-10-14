import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-city-dropdown',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './city-dropdown.component.html',
  styleUrl: './city-dropdown.component.css'
})
export class CityDropdownComponent implements OnInit {

  // @Input()
  // selectedCountry:string = "";
  // @Input()
  // selectedState:string = "";

  city:string = "";
  cities:any[] = []; 

  // @Output()
  // selectedCity = new EventEmitter<string>();

  private locationService = inject(LocationService);

  ngOnInit(): void {
    this.locationService.getSelectedCountry().subscribe((cIso2: string | null) => {
      if (!cIso2) {
        this.cities = [];
      } else {
        this.locationService.getSelectedState().subscribe((sIso2: string | null) => {
          if (cIso2 && sIso2) {
            this.locationService.getCities(cIso2, sIso2).subscribe((cities: any) => {
              this.cities = cities;
            });
          } else {
            this.cities = [];
          }
        });
      }
    });
  }

  onCityChange(city: string){
    console.log(city);
    // this.selectedCity.emit(city);
    this.locationService.setSelectedCity(city);
  }
}
