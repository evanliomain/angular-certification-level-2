import { quoteFeatureKey, State } from './quote.reducer';

export interface QuoteState {
  [quoteFeatureKey]: State;
}
