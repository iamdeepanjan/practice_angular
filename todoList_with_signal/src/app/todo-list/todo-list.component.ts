import { Component, inject } from '@angular/core';
import { TodoappService } from '../todoapp.service';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  private todoService = inject(TodoappService);
  todos = this.todoService.allTodos;
  updateTodo(todo:Todo){
    todo.isCompleted = true;
    this.todoService.updateTodo(todo)
  }
  deleteTodo(todo:Todo){
    this.todoService.removeTodo(todo);
  }
}
