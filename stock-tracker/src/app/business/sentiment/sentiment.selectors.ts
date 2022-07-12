import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSentiment from './sentiment.reducer';

export const selectSentimentState = createFeatureSelector<fromSentiment.State>(
  fromSentiment.sentimentFeatureKey
);

export const selectSentiments = (symbol: string) =>
  createSelector(selectSentimentState, state => state?.[symbol]);

export const selectHasSentiment = (symbol: string) =>
  createSelector(selectSentimentState, state => undefined !== state?.[symbol]);
