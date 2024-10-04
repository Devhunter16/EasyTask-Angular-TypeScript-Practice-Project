import { Component, Input, Output, input, computed, EventEmitter, output } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../ui/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // Properties defined here are available inside our .html file

  // Adding an "Input" decorator here to make these properties settable from outside
  // the component. Adding an exclamation point to tell typescript to calm down
  // and that we will set this to some value later (in this case we're assigning
  // values to them in the app.component.html file)
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean; 

  @Output() select = new EventEmitter<string>();

  // Here we're calling the input() function that comes with angular to tell our
  // app that we should be able to input dynamic data into this avatar variable
  // eslewhere in our app. We can enter a default value into input() if we want.
  // We can also specify with angle brackets what type of input will be receieved,
  // in this case it is a string. These are read-only "signal" values
  // avatar = input.required<string>();
  // name = input.required<string>();
  // id = input.required<string>();

  // Calling the output() function that comes with angular to tell our app that
  // this value will emit dynamic data in our template
  // select = output();

  // Get method!
  get imagePath(): string {
    return 'assets/users/' + this.user.avatar;
  };

  // Using "computed" from angular in order to compute the return value of 
  // imagePath only when the avatar value changes and not upon any change to the
  // component
  // imagePath = computed(() => {
    // return 'assets/users/' + this.avatar(); 
  // });

  onSelectUser(): void {
    // Using our select output value from above 
    this.select.emit(this.user.id);
  };
};
