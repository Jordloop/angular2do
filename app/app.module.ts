//imports general Module code from Angular framework
import { NgModule }      from '@angular/core';

//imports code necessary to run app in browser. (directives to have access to conditionals/ loops)
import { BrowserModule } from '@angular/platform-browser';

//refers to root component.  Matches class declaration in app.component.ts file
import { AppComponent }   from './app.component';
import { FormsModule }  from '@angular/forms';
import { TaskListComponent }  from './task-list.component';
import { EditTaskComponent } from './edit-task.component';
import {NewTaskComponent} from './new-task.component';
import {CompletenessPipe} from './completeness.pipe';

@NgModule({
  //imports built-in module called 'BrowserModule'.  Specifically for this module only.
  imports: [ BrowserModule, FormsModule ],

  //an array of all components that will reside in this module
  declarations: [ AppComponent, TaskListComponent, EditTaskComponent, NewTaskComponent, CompletenessPipe ],

  //an array of all components that will reside in this module
  bootstrap: [ AppComponent ]
})

export class AppModule {}
