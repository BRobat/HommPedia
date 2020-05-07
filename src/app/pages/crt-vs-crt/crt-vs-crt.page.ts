import { Component, OnInit } from '@angular/core';
import { CreaturesService } from 'src/app/services/creatures.service';


@Component({
  selector: 'app-crt-vs-crt',
  templateUrl: './crt-vs-crt.page.html',
  styleUrls: ['./crt-vs-crt.page.scss'],
})
export class CrtVsCrtPage implements OnInit {

  creatures = [];
  firstCreature;
  secondCreature;

  constructor(private creaturesService: CreaturesService) { }

  ngOnInit() {
    this.creatures = this.creaturesService.getAllCreatures();
  }

  chooseFirstCreature($event) {
    console.log($event.target.value)
    this.firstCreature = $event.target.value
  }

  chooseSecondCreature($event) {
    console.log($event.target.value)
    this.secondCreature = $event.target.value
  }

  fight() {

  }

  hit(crt1, crt2, no1, no2) {
    
  }



}
