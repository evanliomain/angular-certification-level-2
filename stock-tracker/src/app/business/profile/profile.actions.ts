import { createAction, props } from '@ngrx/store';
import { Profile } from 'src/app/model';

export const loadProfile = createAction(
  '[Profile] Load Profile',
  props<{ symbol: string }>()
);
export const loadProfileSuccess = createAction(
  '[SUCCESS][Profile] Load Profile',
  props<{ profile: Profile }>()
);

export const loadProfiles = createAction('[Profile] Load Profiles');

export const loadProfilesSuccess = createAction(
  '[SUCCESS][Profile] Load Profiles',
  props<{ profiles: readonly Profile[] }>()
);
