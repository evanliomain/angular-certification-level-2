import { createAction, props } from '@ngrx/store';

export const loadProfiles = createAction('[Profile] Load Profiles');

export const loadProfilesSuccess = createAction(
  '[SUCCESS][Profile] Load Profiles',
  props<{ profiles: readonly { symbol: string; description: string }[] }>()
);
