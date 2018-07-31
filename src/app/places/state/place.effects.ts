import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { PlaceService } from '../place.service';

// NgRx
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as placeActions from './place.actions';

@Injectable()
export class PlaceEffects {
  constructor(private placeService: PlaceService, private actions$: Actions) {}

  @Effect()
  loadPlaces$: Observable<Action> = this.actions$.pipe(
    ofType(placeActions.PlaceActionTypes.Load),
    mergeMap(action => {
      console.log('action in @Effect()', action);
      return this.placeService.getPlaces().pipe(
        map(places => (new placeActions.LoadSuccess(places))),
        catchError(error => of(new placeActions.LoadFail(error)))
      )
    })
  );
}