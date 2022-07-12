import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSymbol from './symbol.reducer';

const selectSymbolState = createFeatureSelector<fromSymbol.State>(
  fromSymbol.symbolFeatureKey
);

export const selectSymbols = createSelector(selectSymbolState, state =>
  Object.entries(state)
    .filter(([, isIn]) => isIn)
    .map(([symbol]) => symbol)
);
