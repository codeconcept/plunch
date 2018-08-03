import { UserActions, UserActionTypes } from "./user.actions";
import { UserChoice } from "../UserChoice";
import { Vote } from "../Vote";

export interface UserChoiceState {
  choices: UserChoice[],
  error: String,
  votes: Vote[]
}

const initialState = {
  choices : [],
  error: '',
  votes: {}
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