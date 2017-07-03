import { Component } from '@angular/core';  //provides app access to angular component function


//Component Annotation Start
@Component({
  selector: 'app-root', //looks for <app-root> tag in index.html
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
  </div>
  `
})
//Component Annotation End

export class AppComponent {

}
