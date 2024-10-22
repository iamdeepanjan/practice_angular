import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {

  taskName: string = '';
  @Output()
  newTask = new EventEmitter();

  addTask(){
    if(this.taskName){
      const newTask = {
        id:Date.now(),
        name: this.taskName,
        completed: false
      }
      console.log(newTask);
      this.newTask.emit(newTask);
      this.taskName = '';
    }
  }
}
