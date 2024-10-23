import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  private tasks = new BehaviorSubject<any[]>([]);

  getTasks() {
    return this.tasks.asObservable();
  }

  setTasks(tasks: any[]) {
    this.tasks.next(tasks);
  }

  addtask(task:any){
    const curentTask = this.tasks.value;
    this.tasks.next([...curentTask, task])
  }
}
