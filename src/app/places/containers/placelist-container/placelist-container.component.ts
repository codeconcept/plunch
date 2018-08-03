import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// NgRx
import { Store, select } from '@ngrx/store';
import * as placeActions from '../../state/place.actions';
import * as userActions from '../../../users/state/user.actions';

import { Place } from '../../Place';
import { UserChoice } from '../../../users/UserChoice';
import { getUserId, getUserState } from '../../../auth/state/auth.selectors';
import { User } from '../../../users/User';

@Component({
  selector: 'app-placelist-container',
  templateUrl: './placelist-container.component.html',
  styleUrls: ['./placelist-container.component.css']
})
export class PlacelistContainerComponent implements OnInit {
  places$: Observable<Place[]>;
  user$: Observable<User>;
  userId$: Observable<Number>;

  constructor(private store: Store<any>) { }

  ngOnInit() {
    this.store.dispatch(new placeActions.Load());
    this.places$ = this.store.pipe(select('places')) as Observable<Place[]>;
    this.user$ = this.store.pipe(select(getUserState)) as Observable<User>;
    this.userId$ = this.store.pipe(select(getUserId)) as Observable<Number>;
  }

  addUserchoice(userChoice: UserChoice) {
    this.store.dispatch(new userActions.Choose(userChoice));
  }

}
