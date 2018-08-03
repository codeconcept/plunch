import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducers";

export const getAuthState = createFeatureSelector<AuthState>('auth');

export const getUserState = createSelector(getAuthState, (state:AuthState) => state.user);
export const getUserId = createSelector(getUserState, (state) => state ? state.id : -1);