import { Component, inject, OnInit } from '@angular/core';
import { TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-summary',
  standalone: true,
  imports: [],
  templateUrl: './task-summary.component.html',
  styleUrl: './task-summary.component.css'
})
export class TaskSummaryComponent implements OnInit {
  
  totalTasks: number = 0;
  completedTasks: number = 0;
  pendingTasks: number = 0;

  private taskService = inject(TaskServiceService);
  
  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.totalTasks = tasks.length;
      this.completedTasks = tasks.filter(task=>task.completed).length;
      this.pendingTasks = tasks.filter(task=>!task.completed).length;
    })
  }
  
}
