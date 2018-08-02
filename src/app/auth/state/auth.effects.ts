import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { AuthService } from '../auth.service';

// NgRx
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as authActions from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private authService: AuthService, private actions$: Actions) {}

  @Effect()
  loginUser$: Observable<Action> = this.actions$.pipe(
    ofType(authActions.AuthActionTypes.Login),
    map((action: authActions.Login) => action.payload),
    mergeMap(user => {
      console.log('action in @Effect() loginUser$', user);
      return this.authService.signIn(user).pipe(
        map(auth => (new authActions.LoginSuccess(auth))),
        catchError(error => of(new authActions.LoginFail(error)))
      )
    })
  );
}