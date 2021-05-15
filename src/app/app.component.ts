import { Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html', //Bu Typescript dosyasının hangi html ile ilişkili olduğu belirtiliyor
  // styleUrls: ['./app.component.css'],
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
}