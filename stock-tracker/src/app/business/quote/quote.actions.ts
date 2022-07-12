import { createAction, props } from '@ngrx/store';
import { Quote } from 'src/app/model';

export const loadQuotes = createAction('[Quote] Load Quotes');
export const loadQuotesSuccess = createAction(
  '[SUCCESS][Quote] Load Quotes',
  props<{ quotes: readonly Quote[] }>()
);
