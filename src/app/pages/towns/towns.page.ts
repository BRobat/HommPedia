import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-towns',
  templateUrl: './towns.page.html',
  styleUrls: ['./towns.page.scss'],
})
export class TownsPage implements OnInit {
  public type: string
  public towns = [
    "Castle",
    "Rampart",
    "Tower",
    "Inferno",
    "Necropolis",
    "Dungeon",
    "Stronghold",
    "Fortress",
    "Conflux",
    "Cove",
    "Neutral"
  ]

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
