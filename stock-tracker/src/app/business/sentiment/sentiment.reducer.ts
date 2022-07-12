import { createReducer, on } from '@ngrx/store';
import { Sentiment } from 'src/app/model';
import * as SentimentActions from './sentiment.actions';

export const sentimentFeatureKey = 'sentiment';

export type State = Record<string, readonly Sentiment[]>;

export const initialState: State = {};

export const reducer = createReducer(
  initialState,

  on(SentimentActions.loadSentiments, state => state),
  on(SentimentActions.loadSentimentsSuccess, (state, { sentiments }) => ({
    ...state,
    [sentiments.symbol]: sentiments.data,
  }))
);
