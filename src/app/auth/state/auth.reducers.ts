import { AuthActionTypes, AuthActions } from "./auth.actions";
import { User } from "../../users/User";

export interface AuthState {
  loggedIn: Boolean;
  user: User;
  error: String
}

const initialState = {
  loggedIn: false,
  user: null,
  error: ''
};

export function reducer(state = initialState, action: AuthActions): any {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess:
      // for Firefow testing (seems there are no redux dev-tools for it ?)
      console.log('state after LoginSuccess', { ...state, loggedIn: true, user: action.payload, error: "" });
      return { ...state, loggedIn: true, user: action.payload, error: "" };
    case AuthActionTypes.LoginFail:
      return { ...state, loggedIn: false, error: action.payload };
    default:
      return state;
  }
}