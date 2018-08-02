import { Action } from "@ngrx/store";
import { User } from "../../users/User";
import { Auth } from "../auth";

export enum AuthActionTypes {
  Login = "[Auth] Login",
  LoginSuccess = "[Auth] Login Success",
  LoginFail = "[Auth] Login Fail"
}

// action creators
export class Login implements Action {
  readonly type = AuthActionTypes.Login;
  // without the payload, "paylaod property doesn't exist" error
  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: Auth) {}
}

export class LoginFail implements Action {
  readonly type = AuthActionTypes.LoginFail;

  constructor(public payload: string) {}
}

export type AuthActions =
  | Login
  | LoginSuccess
  | LoginFail