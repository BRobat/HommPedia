import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculators',
  templateUrl: './calculators.page.html',
  styleUrls: ['./calculators.page.scss'],
})
export class CalculatorsPage implements OnInit {

  calculators = [
    {
      title: 'Creature vs Creature',
      url: '/calculators/crt-vs-crt',
      icon: 'bug'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
