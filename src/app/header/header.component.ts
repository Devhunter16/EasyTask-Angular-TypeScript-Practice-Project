import { Component } from '@angular/core';

// Decorator for our component where we can configure the component - this is a 
// TypeScript feature
@Component({
    // Tells Angular which elements on the screen should be replaced by our own
    // component.
    selector: 'app-header',
    // You need this to tell Angular is this a standalone or modular component?
    // Standalone components are newer and easier to manage and recommended.
    standalone: true,
    // Path to the html file for this component.
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {}