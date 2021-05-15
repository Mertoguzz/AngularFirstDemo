import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <nav class="navbar navbar-light">
    
        <ul class="nav nav-tabs">
          <li class="nav-item"><a class="nav-link active" href="new">New</a></li>
          <li class="nav-item"><a class="nav-link active" href="list">List</a></li>
        </ul>
    
   </nav>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}

