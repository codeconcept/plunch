import { Component, OnInit } from '@angular/core';

//NgRx
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Place } from '../../Place';
import * as placeActions from '../../state/place.actions';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  places$: Observable<Place[]>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new placeActions.Load());
    this.places$ = this.store.pipe(select('places')) as Observable<Place[]>;
  }

}
