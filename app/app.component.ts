import { Component } from '@angular/core';  //provides app access to angular component function


//Component Annotation Start
@Component({
  selector: 'app-root', //looks for <app-root> tag in index.html
  template: `
  <div class="container">
    <h1>{{appTitle}} for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li>{{firstTask.description}}</li>
    </ul>
  </div>
  `
})
//Component Annotation End

export class AppComponent {
  appTitle: string = 'To Do List';
  currentFocus: string = 'Angular Homework';

  currentTime = new Date();//if you want to reference variable within the class you must use "this."
  month: number = this.currentTime.getMonth() +1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  firstTask = {
    description: "Finish weekend Angular homework for Epicodus course"
  }
}
