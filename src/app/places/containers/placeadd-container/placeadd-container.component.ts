import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as placeActions from '../../state/place.actions';


@Component({
  selector: 'app-placeadd-container',
  templateUrl: './placeadd-container.component.html',
  styleUrls: ['./placeadd-container.component.css']
})
export class PlaceaddContainerComponent implements OnInit {

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  createPlace(place) {
    this.store.dispatch(new placeActions.CreatePlace(place));
  }

}
