import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-city',
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css'
})
export class CityComponent implements OnInit {
  constructor(private locationService: LocationService) { }

  cities: any[] = [];

  ngOnInit(): void {
    this.locationService.getSelectedCountry().subscribe((ciso2) => {
      if (!ciso2) {
        this.cities = [];
      }
      else {
        this.locationService.getSelectedState().subscribe((siso2) => {
          if (ciso2 && siso2) {
            this.locationService.getCities(ciso2, siso2).subscribe((data) => {
              this.cities = data;
            });
          }
          else {
            this.cities = [];
          }
        });
      }
    });
  }
  onChangeSelectCity(event: Event) {
    const city = (event.target as HTMLSelectElement).value;
    console.log(city);
    this.locationService.selectCity(city);
  }

}
