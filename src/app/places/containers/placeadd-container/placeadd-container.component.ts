import { Component, OnInit } from '@angular/core';

import { Store, select } from '@ngrx/store';
import * as placeActions from '../../state/place.actions';
import { Observable } from 'rxjs';
import { User } from '../../../users/User';
import { getUserState } from '../../../auth/state/auth.selectors';


@Component({
  selector: 'app-placeadd-container',
  templateUrl: './placeadd-container.component.html',
  styleUrls: ['./placeadd-container.component.css']
})
export class PlaceaddContainerComponent implements OnInit {
  user$: Observable<User>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.user$ = this.store.pipe(select(getUserState)) as Observable<User>;
  }

  createPlace(place) {
    this.store.dispatch(new placeActions.CreatePlace(place));
  }

}
