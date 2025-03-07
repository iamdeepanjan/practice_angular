import { Component } from '@angular/core';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-state',
  imports: [],
  templateUrl: './state.component.html',
  styleUrl: './state.component.css'
})
export class StateComponent {
  constructor(private locationService: LocationService) { }

  states: any[] = [];

  ngOnInit() {
    this.locationService.getSelectedCountry().subscribe((iso2) => {
      if(iso2){
        this.locationService.getStates(iso2).subscribe((data) => {
          this.states = data;
        });
      }
    });
  }

  onChangeSelectState(event: Event) {
    const iso2 = (event.target as HTMLSelectElement).value;
    console.log(iso2);
    this.locationService.selectState(iso2);
  }
}
