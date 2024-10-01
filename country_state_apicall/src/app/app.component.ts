import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DropdownComponent } from './dropdown/dropdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,DropdownComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'country_state_apicall';
}
