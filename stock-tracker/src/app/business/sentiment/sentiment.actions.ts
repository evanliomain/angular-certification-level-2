import { createAction, props } from '@ngrx/store';
import { InsiderSentiment } from 'src/app/model';

export const loadSentiments = createAction(
  '[Sentiment] Load Sentiments',
  props<{ symbol: string }>()
);
export const loadSentimentsSuccess = createAction(
  '[SUCCESS][Sentiment] Load Sentiments',
  props<{ sentiments: InsiderSentiment }>()
);
