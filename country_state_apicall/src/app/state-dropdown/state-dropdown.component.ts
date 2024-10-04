import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../location.service';

@Component({
  selector: 'app-state-dropdown',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './state-dropdown.component.html',
  styleUrl: './state-dropdown.component.css'
})
export class StateDropdownComponent implements OnChanges{
  
  @Input()
  selectedCountry:string="";
  
  state:string = "";
  states:any[] = []; 

  @Output()
  selectedState = new EventEmitter<string>();

  private locationService = inject(LocationService);
  
  ngOnChanges(): void {
    this.locationService.getStates(this.selectedCountry).subscribe(data => this.states=data);
  }

  onStateChange(state: string) {
    console.log(state);
    this.selectedState.emit(state);
  }
}
