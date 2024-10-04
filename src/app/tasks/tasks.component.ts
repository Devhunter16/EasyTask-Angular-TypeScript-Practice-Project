import { Component, Input } from '@angular/core';

import { type Task } from './task/task.model';
import { type NewTaskData } from './new-task/new-task.model';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required: true}) name!: string
  @Input({required: true}) userId!: string;

  isAddingTask: boolean = false;

  // Adding a constructor function to this class so that the 
  // function will automatically be executed when the TasksComponent is instantiated.
  // We're doing something here called "dependency injection". We add tasksService
  // as a dependency to the constructor so we can use it in our class. If we simply
  // instantiated the class rather than doing it this way the TasksService service
  // would not act as a data store
  constructor(private tasksService: TasksService) {};
 
  get selectedUserTasks(): Task[] {
    return this.tasksService.getUserTasks(this.userId);
  };

  onStartAddTask(): void {
    this.isAddingTask = true;
  };

  onCloseAddTask(): void {
    this.isAddingTask = false;
  };

  // Taking the task id and removing whatever task has that Id by filtering the
  // tasks array
  onCompleteTask(id: string): void {
    this.tasksService.removeTask(id);
  };
};