import { Component } from '@angular/core';  //provides app access to angular component function
import { Task } from './task.model';


//Component Annotation Start
@Component({
  selector: 'app-root', //looks for <app-root> tag in index.html
  template: `
  <div class="container">
   <h1>To Do List for {{month}}/{{day}}/{{year}}</h1>
   <h3>{{currentFocus}}</h3>
   <task-list [childTaskList]="masterTaskList" (clickSender)="editTask($event)"></task-list>
      <hr>
      <div>
        <div *ngIf = "selectedTask">
           <h3>{{selectedTask.description}}</h3>
           <p>Task Complete? {{selectedTask.done}}</p>
          <h3>Edit Task</h3>
          <label>Enter Task Description:</label>
          <input [(ngModel)]="selectedTask.description">
           <label>Enter Task Priority (1-3):</label>
           <br>
           <input type="radio" [(ngModel)]="selectedTask.priority" [value]="1">1 (Low Priority)<br>
           <input type="radio" [(ngModel)]="selectedTask.priority" [value]="2">2 (Medium Priority)<br>
           <input type="radio" [(ngModel)]="selectedTask.priority" [value]="3">3 (High Priority)
           <button (click)="finishedEditing()">Done</button>
         </div>
      </div>
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
  selectedTask = null;

  masterTaskList: Task[] = [
    new Task('Finish weekend Angular homework for Epicodus course', 3),
    new Task('Begin brainstorming possible JavaScript group projects', 2),
    new Task('Add README file to last few Angular repos on GitHub', 2)
  ];

  editTask(clickedTask) {
    this.selectedTask = clickedTask;
  }

  finishedEditing() {
    this.selectedTask = null;
  }
}
