import { Injectable } from '@angular/core';

import { type Task } from './task/task.model';
import { type NewTaskData } from './new-task/new-task.model';

// Creating our first service. The idea behind services is to have a class that 
// performs some operation or manages some data that might be needed by one or
// more other components. We're making this injectable to we can do dependancy 
// injection in our tasks.component.ts file and potantially other files so that
// this service acts as a sort of data store that Angular continuously checks
@Injectable({providedIn: 'root'})
export class TasksService {

    private tasks: Task[] = [
        {
          id: 't1',
          userId: 'u1',
          title: 'Bake Cake',
          summary: 'Prepare the ingredients and make a cake.',
          dueDate: '2025-12-31'
        },
        {
          id: 't2',
          userId: 'u2',
          title: 'Eat Cake',
          summary: 'Eat the prepared cake in one sitting.',
          dueDate: '2026-01-01'
        },
        {
          id: 't3',
          userId: 'u3',
          title: 'Find the Man Who Murdered my Father',
          summary: 'Find him and kill him.',
          dueDate: '2024-01-25'
        },
    ];

    // A constructor function automatically fires when the app starts
    constructor() {
        // Using browser storage to store tasks because we don't have a db handy
        // and it's better than nothing I guess
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            // Parsing the JSON we get from localStorage in the browser to turn it
            // back into a usable array of tasks
            this.tasks = JSON.parse(tasks);
        };
    };

    getUserTasks(userId: string) {
        return this.tasks.filter((task) => task.userId === userId);
    };

    addTask(taskData: NewTaskData, userId: string) {
        // Pushing our new task to the "tasks" array
        this.tasks.push({
        // For id here we're just winging it to try to create a unique ID using the date,
        // it's not perfect but its good enough for this demo project
        id: new Date().getTime().toString(),
        userId: userId,
        title: taskData.title,
        summary: taskData.summary,
        dueDate: taskData.date
      });
      this.saveTasks();
    };

    removeTask(id: string) {
        this.tasks = this.tasks.filter((task) => {
            return task.id !== id
        });
        this.saveTasks();
    };

    // Sending updated tasks to browser storage under the 'tasks' key value
    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    };
};