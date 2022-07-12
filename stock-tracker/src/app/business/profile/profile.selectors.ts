import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromProfile from './profile.reducer';

export const selectProfileState = createFeatureSelector<fromProfile.State>(
  fromProfile.profileFeatureKey
);

export const selectMissingProfil = (symbols: readonly string[]) =>
  createSelector(selectProfileState, state =>
    symbols
      .map(symbol => ({ symbol, state: state[symbol] }))
      .filter(({ state }) => undefined === state)
      .map(({ symbol }) => symbol)
  );
