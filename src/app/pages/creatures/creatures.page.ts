import { Component, OnInit } from '@angular/core';
import { CreaturesService } from 'src/app/services/creatures.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.page.html',
  styleUrls: ['./creatures.page.scss'],
})
export class CreaturesPage implements OnInit {

  creatures = [];
  tableOfCreatures = [];
  town: string;

  constructor(private creaturesService: CreaturesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.town = this.activatedRoute.snapshot.paramMap.get('id');
    this.creatures = this.creaturesService.getCreaturesFromTown(this.town);
    this.tableOfCreatures = this.sortCreatures(this.creatures);
  }

  sortCreatures(creatures) {
    let newArray = []
    creatures.map((c) => {
      if (c.Lvl.length < 2) {
        newArray.push([c])
      }
      else {
        let char = c.Lvl.charAt(0);
        newArray[char-1].push(c);
      }
    })
    return newArray
  }


}
