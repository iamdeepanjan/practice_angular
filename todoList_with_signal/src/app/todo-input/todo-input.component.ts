import { Component, inject } from '@angular/core';
import { Todo } from '../todo';
import { TodoappService } from '../todoapp.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.css'
})
export class TodoInputComponent {
  todoName:string = "";
  private todoService = inject(TodoappService)
  addTodo(){
    if(this.todoName){
      const newTodo:Todo = {
        id:Date.now(),
        title: this.todoName,
        isCompleted: false
      }
      console.log(newTodo);
      this.todoService.addtodo(newTodo);
      this.todoName = "";
    }  
  }
}
