import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TaskInputComponent } from './task-input/task-input.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskSummaryComponent } from './task-summary/task-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TaskInputComponent, TaskListComponent, TaskSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RealTime_Task_Management_System';

  // newTask:Object = {};
  // addTask($event: any) {
  //   this.newTask = $event
  // }
  
}
