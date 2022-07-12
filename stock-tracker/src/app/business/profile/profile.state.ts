import { profileFeatureKey, State } from './profile.reducer';

export interface ProfileState {
  [profileFeatureKey]: State;
}
