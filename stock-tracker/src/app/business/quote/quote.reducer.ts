import { createReducer, on } from '@ngrx/store';
import { Quote } from 'src/app/model';
import * as QuoteActions from './quote.actions';

export const quoteFeatureKey = 'quote';

export type State = Record<string, Quote & { loaded: boolean }>;

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(QuoteActions.loadQuote, (state, { symbol }) => ({
    ...state,
    [symbol]: { ...state[symbol], loaded: false },
  })),

  on(QuoteActions.fetchQuotes, (state, { symbols }) => ({
    ...state,
    ...symbols.reduce((acc, symbol) => {
      acc[symbol] = { ...state[symbol], loaded: false };
      return acc;
    }, {} as State),
  })),

  on(QuoteActions.loadQuotes, (state, {}) => state),
  on(QuoteActions.loadQuoteSuccess, (state, { quote }) => ({
    ...state,
    [quote.symbol]: { ...quote, loaded: true },
  })),
  on(QuoteActions.loadQuotesSuccess, (state, { quotes }) => ({
    ...state,
    ...quotes.reduce((acc, quote) => {
      acc[quote.symbol] = { ...quote, loaded: true };
      return acc;
    }, {} as State),
  }))
);
