import { createReducer, on } from '@ngrx/store';
import { Profile } from 'src/app/model';
import * as ProfileActions from './profile.actions';

export const profileFeatureKey = 'profile';

export type State = Record<string, Profile>;

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(ProfileActions.loadProfiles, state => state),
  on(ProfileActions.fetchProfile, (state, { symbol }) => ({
    ...state,
    [symbol]: { symbol, description: '...' },
  })),
  on(ProfileActions.loadProfilesSuccess, (state, { profiles }) => ({
    ...state,
    ...profiles.reduce((acc, profile) => {
      acc[profile.symbol] = profile;
      return acc;
    }, {} as State),
  })),
  on(ProfileActions.fetchProfiles, (state, { symbols }) => ({
    ...state,
    ...symbols.reduce((acc, symbol) => {
      acc[symbol] = { symbol, description: '...' };
      return acc;
    }, {} as State),
  }))
);
