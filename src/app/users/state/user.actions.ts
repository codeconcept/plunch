import { Action } from "@ngrx/store";
import { User } from "../User";

export enum UserActionTypes {
  Choose = "[User] Choose",
  ChooseSuccess = "[User] Choose Success",
  ChooseFail = "Usere] Choose Fail"
}

// action creators
export class Choose implements Action {
  readonly type = UserActionTypes.Choose;
  // without the payload, "paylaod property doesn't exist" error
  constructor(public payload: any) {}   // todo
}

export class ChooseSuccess implements Action {
  readonly type = UserActionTypes.ChooseSuccess;

  constructor(public payload: any) {}   // todo
}

export class ChooseFail implements Action {
  readonly type = UserActionTypes.ChooseFail;

  constructor(public payload: string) {}
}

export type UserActions =
  | Choose
  | ChooseSuccess
  | ChooseFail