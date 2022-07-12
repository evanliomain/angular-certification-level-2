import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSymbol from './symbol.reducer';

const selectSymbolState = createFeatureSelector<fromSymbol.State>(
  fromSymbol.symbolFeatureKey
);

export const selectSymbols = createSelector(selectSymbolState, state => {
  const symbols = Object.entries(state).filter(([, isIn]) => isIn);
  if (0 === symbols.length) {
    return [];
  }

  return symbols.map(([symbol]) => symbol);
});
