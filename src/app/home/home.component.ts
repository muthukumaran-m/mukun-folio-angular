import { Component, OnInit } from '@angular/core';

declare var particlesJS: any

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    particlesJS.load(
      'particles-js',
      'assets/data/particles.json',
      function () {
        // console.log('callback - particles.js config loaded');
      }
    );
  }

}
