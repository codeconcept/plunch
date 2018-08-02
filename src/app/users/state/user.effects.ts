import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { UserService } from '../user.service';

// NgRx
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as userActions from './user.actions';
import { User } from '../User';

@Injectable()
export class UserEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

}