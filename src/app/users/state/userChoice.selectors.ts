import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserChoiceState } from './user.reducers';

export const getUsersState = createFeatureSelector<UserChoiceState>('users');
export const getChoices = createSelector(getUsersState, (state: UserChoiceState) => state.choices);