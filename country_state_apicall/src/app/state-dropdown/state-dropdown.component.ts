import { Component, EventEmitter, inject, Input, OnChanges, OnDestroy, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LocationService } from '../location.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-state-dropdown',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './state-dropdown.component.html',
  styleUrl: './state-dropdown.component.css'
})
export class StateDropdownComponent implements OnInit{
  
  // @Input()
  // selectedCountry:string="";
  
  state:string = "";
  states:any[] = []; 

  // @Output()
  // selectedState = new EventEmitter<string>();

  private locationService = inject(LocationService);
  
  ngOnInit(): void {
    this.locationService.getSelectedCountry().subscribe((cIso2:string|null)=>{  
      if(cIso2){
        this.locationService.getStates(cIso2).subscribe(data => this.states=data);
      } else {
        this.states = [];
      }
    });
  }

  onStateChange(state: string) {
    console.log(state);
    // this.selectedState.emit(state);
    this.locationService.setSelectedState(state);
  }

}
