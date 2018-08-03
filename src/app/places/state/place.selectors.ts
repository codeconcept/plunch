import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PlacesState } from './place.reducers';

export const getPlacesState = createFeatureSelector<PlacesState>('places');
export const getPlaces = createSelector(getPlacesState, (state: PlacesState) => state.places);