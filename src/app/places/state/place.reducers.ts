import { PlaceActionTypes, PlaceActions } from "./place.actions";

const initialState = {
  places: [],
  error: ''
};

export function reducer(state = initialState, action: PlaceActions): any {
  console.log(action);
  switch (action.type) {
    case PlaceActionTypes.LoadSuccess:
      return { ...state, places: action.payload, error: '' };
    case PlaceActionTypes.LoadFail:
      return { ...state, places: [], error: action.payload }
  }
}