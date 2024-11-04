import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-city-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './city-search.component.html',
  styleUrl: './city-search.component.css'
})
export class CitySearchComponent {

  cityname:string = "";
  private weatherService = inject(WeatherService);

  fetchWeatherDetails(){
    if(this.cityname){
      this.weatherService.setCity(this.cityname);
      this.cityname = "";
    }
  }
}
