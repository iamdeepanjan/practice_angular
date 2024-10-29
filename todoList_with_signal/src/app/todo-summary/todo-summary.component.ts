import { Component, computed, inject, signal } from '@angular/core';
import { TodoappService } from '../todoapp.service';

@Component({
  selector: 'app-todo-summary',
  standalone: true,
  imports: [],
  templateUrl: './todo-summary.component.html',
  styleUrl: './todo-summary.component.css'
})
export class TodoSummaryComponent {

  private taskService = inject(TodoappService);

  totalTasks = computed(() => this.taskService.allTodos().length);
  completedTasks = computed(() => this.taskService.allTodos().filter(todos => todos.isCompleted).length);
  pendingTasks = computed(() => this.taskService.allTodos().filter(todos => !todos.isCompleted).length);
}
