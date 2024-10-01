import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  countries=[
    {name:"India",state:["WB", "UP", "MH"]},
    {name:"US",state:["Texas", "Cal", "NY"]},
  ]
  country:string="";
  states:string[]=[];
  state:string="";

  onCountryChange(country:string){
    this.country = country;
    const countryName = this.countries.find(c => c.name === country);
    this.states = countryName?countryName.state:[];
    this.state = "";
  }
  

}
