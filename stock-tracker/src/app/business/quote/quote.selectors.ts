import { createFeatureSelector, createSelector } from '@ngrx/store';
import { selectProfileState } from 'src/app/business/profile';
import { selectSymbols } from 'src/app/business/symbol';
import * as fromQuote from './quote.reducer';

const selectQuoteState = createFeatureSelector<fromQuote.State>(
  fromQuote.quoteFeatureKey
);

export const selectQuotes = createSelector(
  selectSymbols,
  selectQuoteState,
  (symbols, state) => symbols.map(symbol => state[symbol])
);

export const selectQuotesAndProfil = createSelector(
  selectSymbols,
  selectProfileState,
  selectQuoteState,
  (symbols, profiles, state) =>
    symbols.map(symbol => ({
      ...state[symbol],
      description: profiles[symbol].description,
    }))
);
