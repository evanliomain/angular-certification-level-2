import { createReducer, on } from '@ngrx/store';
import { Quote } from 'src/app/model';
import * as QuoteActions from './quote.actions';

export const quoteFeatureKey = 'quote';

export type State = Record<string, Quote>;

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(QuoteActions.loadQuotes, state => state),
  on(QuoteActions.loadQuotesSuccess, (state, { quotes }) => ({
    ...state,
    ...quotes.reduce((acc, quote) => {
      acc[quote.symbol] = quote;
      return acc;
    }, {} as State),
  }))
);
