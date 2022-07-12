import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { forkJoin, map, switchMap } from 'rxjs';
import { FinnhubService } from 'src/app/behavior/api';
import { addSymbol, selectSymbols, SymbolState } from 'src/app/business/symbol';

import * as QuoteActions from './quote.actions';

@Injectable()
export class QuoteEffects {
  loadQuotes$ = createEffect(() =>
    this.actions$
      .pipe(ofType(QuoteActions.loadQuotes))
      .pipe(concatLatestFrom(() => this.store.select(selectSymbols)))
      .pipe(
        switchMap(([, symbols]) =>
          forkJoin(symbols.map(symbol => this.api.quote(symbol))).pipe(
            map(quotes => QuoteActions.loadQuotesSuccess({ quotes }))
          )
        )
      )
  );

  addSymbol$ = createEffect(() =>
    this.actions$.pipe(ofType(addSymbol)).pipe(
      switchMap(({ symbol }) =>
        this.api
          .quote(symbol)
          .pipe(map(quote => [quote]))
          .pipe(map(quotes => QuoteActions.loadQuotesSuccess({ quotes })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<SymbolState>,
    private api: FinnhubService
  ) {}
}
