import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-city-dropdown',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './city-dropdown.component.html',
  styleUrl: './city-dropdown.component.css'
})
export class CityDropdownComponent implements OnChanges {

  @Input()
  selectedCountry:string = "";
  @Input()
  selectedState:string = "";

  city:string = "";
  cities:any[] = []; 

  @Output()
  selectedCity = new EventEmitter<string>();

  private locationService = inject(LocationService);


  ngOnChanges(): void {
    this.locationService.getCities(this.selectedCountry,this.selectedState).subscribe(data => this.cities=data);
  }

  onCityChange(city:string){
    console.log(city);
    this.selectedCity.emit(city);
  }
}
