import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './state/user.reducers';
import { UserEffects } from './state/user.effects';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([ UserEffects ]),
  ],
  declarations: [LoginComponent, LoginContainerComponent],
  exports: [LoginContainerComponent]
})
export class UsersModule { }
