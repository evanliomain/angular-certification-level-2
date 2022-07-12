import { sentimentFeatureKey, State } from './sentiment.reducer';

export interface SentimentState {
  [sentimentFeatureKey]: State;
}
