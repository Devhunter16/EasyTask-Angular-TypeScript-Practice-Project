import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
// Importing FormsModule to use ngModel directive in our html template
import { FormsModule } from '@angular/forms';

import { type NewTaskData } from './new-task.model';
import { TasksService } from '../tasks.service'

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();

  // Just another way of doing dependency injection. For this one you don't have to
  // use a constructor function and so I prefer this one
  private tasksService = inject(TasksService);

  // These store values that are provided to the input fields in our template
  enteredTitle: string = "";
  enteredSummary: string = "";
  enteredDate: string = "";

  onCancel(): void {
    // Emitting our cancel event
    this.close.emit();
  };

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate
      }, 
      this.userId
    );
    this.close.emit();
  };
};