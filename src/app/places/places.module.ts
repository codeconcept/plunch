import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/place.reducers';

import { PlaceListComponent } from './components/place-list/place-list.component';
import { PlaceAddComponent } from './components/place-add/place-add.component';
import { EffectsModule } from '@ngrx/effects';
import { PlaceEffects } from './state/place.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('places', reducer),
    EffectsModule.forFeature([ PlaceEffects ]),
    HttpClientModule
  ],
  declarations: [PlaceListComponent, PlaceAddComponent],
  exports: [PlaceListComponent, PlaceAddComponent]
})
export class PlacesModule { }
