import { Component, OnInit } from '@angular/core';
import { CreaturesService } from 'src/app/services/creatures.service';
import { Creature } from 'src/app/model/creature';


@Component({
  selector: 'app-crt-vs-crt',
  templateUrl: './crt-vs-crt.page.html',
  styleUrls: ['./crt-vs-crt.page.scss'],
})
export class CrtVsCrtPage implements OnInit {

  creatures = [];
  firstCreature: Creature;
  secondCreature: Creature;
  someFknArray = [];

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

  battle() {
    this.fight(this.firstCreature, this.secondCreature, 10, 10)
  }

  fight(crt1: Creature, crt2: Creature, num1, num2) {
    let someFknArray = [];
    let health1 = crt1.HP * num1
    let health2 = crt2.HP * num2
    let currentNum1 = num1
    let currentNum2 = num2
    let isCrt1turn = true;
    let id = 1;

    //here determine if there is retaliation or not
    
    while(health1 > 0 && health2 > 0) {
      // console.log("isCrt1turn: ", isCrt1turn, "health1: ", health1, "health2", health2, "currentNum1", currentNum1, "currentNum2", currentNum2  )

      // there should be a function for calculating stuff. Or not. I dnt kno
      if(isCrt1turn) {
        health2 -= this.hit(crt1, currentNum1)
        currentNum2 = health2 / crt2.HP
        if(false) {
          health1 -= this.hit(crt2, currentNum1)
          currentNum1 = health1 / crt1.HP
        }
      }

      if(!isCrt1turn) {
        health1 -= this.hit(crt2, currentNum1)
        currentNum1 = health1 / crt1.HP
        if(false) {
          health2 -= this.hit(crt1, currentNum1)
          currentNum2 = health2 / crt2.HP
        }
      }

      someFknArray.push({
        "health1": health1,
        "health2": health2,
        "currentNum1": currentNum1,
        "currentNum2": currentNum2,
        "id": id
      });
      //push to some list
      isCrt1turn != isCrt1turn;
      id++
    }
    this.someFknArray = someFknArray;
  }

  hit(a,b) {
    return a.maxDmg * b
  }



}
