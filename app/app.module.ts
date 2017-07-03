//imports general Module code from Angular framework
import { NgModule }      from '@angular/core';

//imports code necessary to run app in browser. (directives to have access to conditionals/ loops)
import { BrowserModule } from '@angular/platform-browser';

//refers to root component.  Matches class declaration in app.component.ts file
import { AppComponent }   from './app.component';

@NgModule({
  //imports built-in module called 'BrowserModule'.  Specifically for this module only.
  imports: [ BrowserModule ],

  //an array of all components that will reside in this module
  declarations: [ AppComponent ],

  //an array of all components that will reside in this module
  bootstrap: [ AppComponent ]
})

export class AppModule {

}