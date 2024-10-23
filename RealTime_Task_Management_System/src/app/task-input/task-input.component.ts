import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-input.component.html',
  styleUrl: './task-input.component.css'
})
export class TaskInputComponent {

  taskName: string = '';
  // @Output()
  private taskService = inject(TaskServiceService);

  addTask(){
    if(this.taskName){
      const newTask = {
        id:Date.now(),
        name: this.taskName,
        completed: false
      }
      console.log(newTask);
      this.taskService.addtask(newTask);
      // this.newTask.emit(newTask);
      this.taskName = '';
    }
  }
}
