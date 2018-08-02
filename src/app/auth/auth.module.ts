import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './state/auth.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([ AuthEffects ]),
  ],
  declarations: []
})
export class AuthModule { }
