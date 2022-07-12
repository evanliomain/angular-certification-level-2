import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter, map, switchMap, take, tap } from 'rxjs';
import {
  loadProfile,
  ProfileState,
  selectProfil,
} from 'src/app/business/profile';
import { loadSentiments, selectSentiments } from 'src/app/business/sentiment';

@Component({
  selector: 'app-stock-sentiment-container',
  template: `
    <app-stock-sentiment-view
      [profile]="profile$ | async"
      [sentiments]="(sentiments$ | async) ?? []"
    ></app-stock-sentiment-view>
  `,
})
export class StockSentimentContainerComponent implements OnInit {
  private symbol$ = this.route.paramMap
    .pipe(map(param => param.get('symbol')))
    .pipe(filter(symbol => null !== symbol));

  protected profile$ = this.symbol$.pipe(
    switchMap(symbol => this.store.select(selectProfil(symbol ?? '')))
  );
  protected sentiments$ = this.symbol$.pipe(
    switchMap(symbol => this.store.select(selectSentiments(symbol ?? '')))
  );

  private init$ = this.symbol$.pipe(
    tap(s => {
      const symbol = s ?? '';
      this.store.dispatch(loadProfile({ symbol }));
      this.store.dispatch(loadSentiments({ symbol }));
    })
  );

  constructor(
    private store: Store<ProfileState>,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init$.pipe(take(1)).subscribe();
  }
}
