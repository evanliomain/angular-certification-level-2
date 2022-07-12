import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProfiles } from 'src/app/business/profile';
import { loadQuotes, selectQuotes, selectQuotesAndProfil } from 'src/app/business/quote';
import { addSymbol, SymbolState } from 'src/app/business/symbol';

@Component({
  selector: 'app-stock-list-container',
  template: `<app-stock-list-view
    [stocks]="(quotes$ | async) ?? []"
    (add)="onAdd($event)"
  ></app-stock-list-view>`,
})
export class StockListContainerComponent implements OnInit {
  protected quotes$ = this.store.select(selectQuotesAndProfil);

  constructor(private store: Store<SymbolState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadQuotes());
    this.store.dispatch(loadProfiles());
  }

  protected onAdd(symbol: string): void {
    this.store.dispatch(addSymbol({ symbol }));
  }
}
