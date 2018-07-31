import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// NgRx
import { Store, select } from '@ngrx/store';
import * as placeActions from '../../state/place.actions';

import { Place } from '../../Place';

@Component({
  selector: 'app-placelist-container',
  templateUrl: './placelist-container.component.html',
  styleUrls: ['./placelist-container.component.css']
})
export class PlacelistContainerComponent implements OnInit {
  places$: Observable<Place[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new placeActions.Load());
    this.places$ = this.store.pipe(select('places')) as Observable<Place[]>;
  }

}
