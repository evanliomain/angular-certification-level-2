import { State, symbolFeatureKey } from './symbol.reducer';

export interface SymbolState {
  [symbolFeatureKey]: State;
}
