import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInputComponent } from './todo-input/todo-input.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoSummaryComponent } from './todo-summary/todo-summary.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TodoInputComponent,TodoListComponent,TodoSummaryComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todoList_with_signal';
}
