import { Component, inject, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { WeatherService } from '../weather.service';
import { Subscription } from 'rxjs';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-weather-display',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './weather-display.component.html',
  styleUrl: './weather-display.component.css'
})
export class WeatherDisplayComponent implements OnInit {

  private weatherService = inject(WeatherService);

  weatherData:any = null;
  error:string = "";
  

  ngOnInit(): void {
    this.weatherService.getCity().subscribe( city => {
      if(city){
        this.error = "";
        this.weatherService.getWeatherDetails(city).subscribe( {
          next:data => {
            this.weatherData = data;
            this.error = "";
            console.log(this.weatherData);
            this.weatherService.addCity(city);
          },
          error:err=>{
            this.weatherData = null;
            this.error = err.message;
          }  
        });
      }
    } );
    
  }

}  
