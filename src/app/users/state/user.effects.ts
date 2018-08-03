import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';

import { UserService } from '../user.service';

// NgRx
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as userActions from './user.actions';
import { UserChoice } from '../UserChoice';
import * as placeActions from '../../places/state/place.actions'

@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  @Effect()
  addUserChoice$: Observable<Action> = this.actions$.pipe(
    ofType(userActions.UserActionTypes.Choose),
    map((action: userActions.Choose) => action.payload),
    mergeMap((userChoice: UserChoice) => {
      return this.userService.makeChoice(userChoice).pipe(
        map(createdUserChoice => (new userActions.ChooseSuccess(createdUserChoice))),
        catchError(error => of(new userActions.ChooseFail(error)))
      )
    })
  );

}