import { Action } from "@ngrx/store";
import { Place } from "../Place";

export enum PlaceActionTypes {
  Load = "[Place] Load",
  LoadSuccess = "[Place] Load Success",
  LoadFail = "[Place] Load Fail",
  CreatePlace = "[Place] Create Place",
  CreatePlaceSuccess = "[Place] Create Place Success",
  CreatePlaceFail = "[Place] Create Place Fail"
}

// action creators
export class Load implements Action {
  readonly type = PlaceActionTypes.Load;
  // without the payload, "paylaod property doesn't exist" error
  constructor(public payload: any = null) {}
}

export class LoadSuccess implements Action {
  readonly type = PlaceActionTypes.LoadSuccess;

  constructor(public payload: Place[]) {}
}

export class LoadFail implements Action {
  readonly type = PlaceActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export class CreatePlace implements Action {
  readonly type = PlaceActionTypes.CreatePlace;

  constructor(public payload: Place) {}
}

export class CreatePlaceSuccess implements Action {
  readonly type = PlaceActionTypes.CreatePlaceSuccess;

  constructor(public payload: Place) {}
}

export class CreatePlaceFail implements Action {
  readonly type = PlaceActionTypes.CreatePlaceFail;

  constructor(public payload: string) {}
}

export type PlaceActions =
  | Load
  | LoadSuccess
  | LoadFail
  | CreatePlace
  | CreatePlaceSuccess
  | CreatePlaceFail;
