import { Component, inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather-history',
  standalone: true,
  imports: [],
  templateUrl: './weather-history.component.html',
  styleUrl: './weather-history.component.css'
})
export class WeatherHistoryComponent implements OnInit{

  cityList:string[] = [];
  private weatherService = inject(WeatherService);


  ngOnInit(): void {
    this.weatherService.getCityList().subscribe( list => this.cityList=list );
  }


  onClick(city:string){
    this.weatherService.setCity(city);
  }
}
