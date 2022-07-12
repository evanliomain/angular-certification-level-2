import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';
import { filter, map, switchMap } from 'rxjs/operators';
import { FinnhubService } from 'src/app/behavior/api';
import { selectHasSentiment } from 'src/app/business/sentiment/sentiment.selectors';
import { SentimentState } from 'src/app/business/sentiment/sentiment.state';
import { lastMonths } from 'src/app/utils/date';
import * as SentimentActions from './sentiment.actions';

@Injectable()
export class SentimentEffects {
  loadSentiments$ = createEffect(() =>
    this.actions$
      .pipe(ofType(SentimentActions.loadSentiments))
      .pipe(map(({ symbol }) => symbol))
      .pipe(
        concatLatestFrom(symbol =>
          this.store.select(selectHasSentiment(symbol))
        )
      )
      .pipe(filter(([, hasSentiment]) => !hasSentiment))
      .pipe(map(([symbol]) => symbol))
      .pipe(map(symbol => ({ symbol, ...lastMonths(3) })))
      .pipe(
        switchMap(({ symbol, from, to }) =>
          this.api
            .sentiments(symbol, from, to)
            .pipe(
              map(sentiments =>
                SentimentActions.loadSentimentsSuccess({ sentiments })
              )
            )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private store: Store<SentimentState>,
    private api: FinnhubService
  ) {}
}
