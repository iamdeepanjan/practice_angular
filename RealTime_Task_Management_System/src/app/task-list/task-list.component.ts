import { Component, inject, Input, OnChanges, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit, OnChanges {

  tasks: any[] = [];
  @Input()
  task:any = {};
  private taskService = inject(TaskServiceService);
  
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }
  
  ngOnChanges(): void { 
    if(this.task && this.task.name && this.task.id){
      this.tasks.push(this.task);
    }
    this.taskService.setTasks(this.tasks);
  }


  updateTask(taskId: number) {
    const task = this.tasks.find(task => task.id === taskId);
    if (task) {
      task.completed = true;
    }
    this.taskService.setTasks(this.tasks);
  }

}
