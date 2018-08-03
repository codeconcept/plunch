import { Action } from "@ngrx/store";
import { UserChoice } from "../UserChoice";

export enum UserActionTypes {
  Choose = "[UserChoice] Choose",
  ChooseSuccess = "[UserChoice] Choose Success",
  ChooseFail = "[UserChoice] Choose Fail"
}

// action creators
export class Choose implements Action {
  readonly type = UserActionTypes.Choose;
  // without the payload, "paylaod property doesn't exist" error
  constructor(public payload: UserChoice) {}
}

export class ChooseSuccess implements Action {
  readonly type = UserActionTypes.ChooseSuccess;

  constructor(public payload: UserChoice) {}
}

export class ChooseFail implements Action {
  readonly type = UserActionTypes.ChooseFail;

  constructor(public payload: string) {}
}

export type UserActions =
  | Choose
  | ChooseSuccess
  | ChooseFail