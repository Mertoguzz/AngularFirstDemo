import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <section class="hero is-info is-fullheight is-bold">
    <div class="hero-body">
    <div class="container">
      <h1 class="title">Welcome to My First Angular Demo :) </h1>
    </div>
    </div>
    </section>
  `,
  styles: [`
    .hero {
      background-image: url('/assets/canyon.jpg') !important;
      background-size: cover;
      background-position: center center;
    }
    .container>h1{
      color:white;
    }
  `]
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}