import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadProfiles, ProfileState } from 'src/app/business/profile';
import { loadQuotes, selectQuotesAndProfil } from 'src/app/business/quote';
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

  constructor(private store: Store<SymbolState & ProfileState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadQuotes());
    this.store.dispatch(loadProfiles());
  }

  protected onAdd(symbol: string): void {
    if (undefined === symbol || null === symbol || '' === symbol) {
      return;
    }
    this.store.dispatch(addSymbol({ symbol: symbol.toUpperCase() }));
  }
}
