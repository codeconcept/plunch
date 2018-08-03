import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// NgRx
import { StoreModule } from '@ngrx/store';
import { reducer } from './state/place.reducers';

import { PlaceListComponent } from './components/place-list/place-list.component';
import { PlaceAddComponent } from './components/place-add/place-add.component';
import { EffectsModule } from '@ngrx/effects';
import { PlaceEffects } from './state/place.effects';
import { PlacelistContainerComponent } from './containers/placelist-container/placelist-container.component';
import { PlaceaddContainerComponent } from './containers/placeadd-container/placeadd-container.component';
import { PlaceChosenComponent } from './components/place-chosen/place-chosen.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('places', reducer),
    EffectsModule.forFeature([ PlaceEffects ]),
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [PlaceListComponent, PlaceAddComponent, PlacelistContainerComponent, PlaceaddContainerComponent, PlaceChosenComponent],
  exports: [PlacelistContainerComponent, PlaceaddContainerComponent]
})
export class PlacesModule { }
