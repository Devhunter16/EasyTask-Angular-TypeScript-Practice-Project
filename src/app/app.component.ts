import { Component } from '@angular/core';

import { type User } from './user/user.model'
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';

import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  // Defining "users" here with our list of dummy users to be able to use it in 
  // our html template
  users: User[] = DUMMY_USERS;
  selectedUserId: string | undefined;

  get selectedUser(): User | undefined {
    // .find() is an JS array method that takes a function that executes on every
    // array element. In this case it returns the first user who's id property
    // matches the selectedUserId
    return this.users.find((user) => user.id === this.selectedUserId);
  };

  onSelectUser(id: string): void {
    this.selectedUserId = id;
  };
};
