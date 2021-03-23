import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  yearsofExperience:string;

  constructor() { }

  ngOnInit(): void {
    let exp=(new Date().getMonth() -
    new Date(2018, 11, 29).getMonth() +
        12 * (new Date().getFullYear() - new Date(2018, 11, 29).getFullYear())) /
        12;
    this.yearsofExperience=parseFloat(<string><unknown>exp).toFixed(1);
  }

}
