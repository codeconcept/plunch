import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-place-chosen',
  templateUrl: './place-chosen.component.html',
  styleUrls: ['./place-chosen.component.css']
})
export class PlaceChosenComponent implements OnInit, OnChanges {
  @Input() votes;
  @Input() placeId;
  pseudosForSpecificPlace: any;

  constructor() { }

  ngOnInit() {
    // this.selectPlacesByPlaceId(this.votes, this.placeId)
  }

  ngOnChanges(changes) {
    if(changes.votes) {
      // debugger;
      this.selectPlacesByPlaceId(changes.votes.currentValue, this.placeId);
    }
  }
  
  selectPlacesByPlaceId(votes, placeId: Number) {
    console.log('votes ====>', votes);
    if(!votes || Object.keys(votes).length === 0) return;

    const votesForcurrentPlace = votes['placeId' + placeId];
    if(!votesForcurrentPlace) {
      this.pseudosForSpecificPlace = [];
      return;
    }
    this.pseudosForSpecificPlace = votesForcurrentPlace.map(obj => obj.pseudo);
  }

}
