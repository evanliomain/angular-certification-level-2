import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';

import { Store } from '@ngrx/store';
import { forkJoin } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { FinnhubService } from 'src/app/behavior/api';
import { addSymbol, selectSymbols, SymbolState } from 'src/app/business/symbol';
import * as ProfileActions from './profile.actions';
import { selectMissingProfil } from './profile.selectors';

@Injectable()
export class ProfileEffects {
  loadProfile$ = createEffect(() =>
    this.actions$
      .pipe(ofType(ProfileActions.loadProfile))
      .pipe(
        concatLatestFrom(({ symbol }) =>
          this.store.select(selectMissingProfil([symbol]))
        )
      )
      .pipe(filter(([, symbols]) => 0 !== symbols.length))
      .pipe(map(([, symbols]) => symbols[0]))
      .pipe(
        switchMap(symbol =>
          this.api
            .description(symbol)
            .pipe(map(symbol => [symbol]))
            .pipe(
              map(profiles => ProfileActions.loadProfilesSuccess({ profiles }))
            )
        )
      )
  );

  loadProfiles$ = createEffect(() =>
    this.actions$
      .pipe(ofType(ProfileActions.loadProfiles))
      .pipe(concatLatestFrom(() => this.store.select(selectSymbols)))
      .pipe(
        concatLatestFrom(([, symbols]) =>
          this.store.select(selectMissingProfil(symbols))
        )
      )
      .pipe(
        switchMap(([, symbols]) =>
          forkJoin(symbols.map(symbol => this.api.description(symbol))).pipe(
            map(profiles => ProfileActions.loadProfilesSuccess({ profiles }))
          )
        )
      )
  );

  addSymbol$ = createEffect(() =>
    this.actions$
      .pipe(ofType(addSymbol))
      .pipe(
        concatLatestFrom(({ symbol }) =>
          this.store.select(selectMissingProfil([symbol]))
        )
      )
      .pipe(filter(([, symbols]) => 0 !== symbols.length))
      .pipe(map(([, symbols]) => symbols[0]))
      .pipe(
        switchMap(symbol =>
          this.api
            .description(symbol)
            .pipe(map(symbol => [symbol]))
            .pipe(
              map(profiles => ProfileActions.loadProfilesSuccess({ profiles }))
            )
        )
      )
  );

  constructor(
    private actions$: Actions,
    private store: Store<SymbolState>,
    private api: FinnhubService
  ) {}
}
