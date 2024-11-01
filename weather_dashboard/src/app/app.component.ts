import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CitySearchComponent } from './city-search/city-search.component';
import { WeatherDisplayComponent } from './weather-display/weather-display.component';
import { WeatherHistoryComponent } from './weather-history/weather-history.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CitySearchComponent, WeatherDisplayComponent, WeatherHistoryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'weather_dashboard';
}
