import { createAction, props } from '@ngrx/store';
import { Quote } from 'src/app/model';

export const loadQuote = createAction(
  '[Quote] Load Quote',
  props<{ symbol: string }>()
);
export const loadQuoteSuccess = createAction(
  '[SUCCESS][Quote] Load Quote',
  props<{ quote: Quote }>()
);

export const fetchQuotes = createAction(
  '[Quote] Fetch Quotes',
  props<{ symbols: readonly string[] }>()
);
export const loadQuotes = createAction('[Quote] Load Quotes');
export const loadQuotesSuccess = createAction(
  '[SUCCESS][Quote] Load Quotes',
  props<{ quotes: readonly Quote[] }>()
);
