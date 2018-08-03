import { UserActions, UserActionTypes } from "./user.actions";

const initialState = {
  choices : [],
  error: ''
};

export function reducer(state = initialState, action: UserActions) {
  switch (action.type) {
    case UserActionTypes.ChooseSuccess:
      return { ...state, choices: [...action.payload], error: '' };
    case UserActionTypes.ChooseFail:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}