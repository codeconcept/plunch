import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeadd-container',
  templateUrl: './placeadd-container.component.html',
  styleUrls: ['./placeadd-container.component.css']
})
export class PlaceaddContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createPlace(place) {
    console.log(`todo, add this place to existing places: ${JSON.stringify(place)}`);
  }

}
