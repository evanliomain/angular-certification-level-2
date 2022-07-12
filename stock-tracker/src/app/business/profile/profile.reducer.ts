import { createReducer, on } from '@ngrx/store';
import * as ProfileActions from './profile.actions';

export const profileFeatureKey = 'profile';

export type State = Record<string, { symbol: string; description: string }>;

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(ProfileActions.loadProfiles, state => state),
  on(ProfileActions.loadProfilesSuccess, (state, { profiles }) => ({
    ...state,
    ...profiles.reduce((acc, profile) => {
      acc[profile.symbol] = profile;
      return acc;
    }, {} as State),
  }))
);
