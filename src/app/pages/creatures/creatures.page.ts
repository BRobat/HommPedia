import { Component, OnInit } from '@angular/core';
import { CreaturesService } from 'src/app/services/creatures.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-creatures',
  templateUrl: './creatures.page.html',
  styleUrls: ['./creatures.page.scss'],
})
export class CreaturesPage implements OnInit {

  public creatures = []
  public town: string;

  constructor(private creaturesService: CreaturesService, private activatedRoute: ActivatedRoute) {
    this.creatures = this.creaturesService.getCreaturesFromTown(this.town);
    console.log(this.creatures)
   }

  ngOnInit() {
    this.town = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
