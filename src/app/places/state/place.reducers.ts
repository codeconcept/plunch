import { PlaceActionTypes, PlaceActions } from "./place.actions";
import { Place } from "../Place";

export interface PlacesState {
  places: Place[],
  error: String
}

const initialState = {
  places: [],
  error: ""
};

export function reducer(state = initialState, action: PlaceActions): any {
  console.log(action);
  switch (action.type) {
    case PlaceActionTypes.LoadSuccess:
      return { ...state, places: action.payload, error: "" };
    case PlaceActionTypes.LoadFail:
      return { ...state, places: [], error: action.payload };
    case PlaceActionTypes.CreatePlaceSuccess:
      return { ...state, place: [...state.places, action.payload] };
    case PlaceActionTypes.CreatePlaceFail:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
